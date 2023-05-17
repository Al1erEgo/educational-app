import { useState } from 'react'

import { useAuthorised } from '../../../../auth/hooks'
import { useCardPacksQuery } from '../../../api'
import { MY_BUTTON_NAME } from '../../../constants'
import { usePackMutations } from '../../../hooks'
import { PackModalsHandlersType } from '../../../types/pack-modals'
import { getSortingParam } from '../../../utils'
import {
  HandleClearFiltersType,
  HandlePacksSearchType,
  HandleSliderChangeType,
  HandleToggleButtonType,
  PacksTableDataType,
  PacksTableParamsType,
} from '../types'
import { PacksModalsHandlersType } from '../types/packs-modals'
import { getPacksTableColumns } from '../utils'

import { usePacksHandlers } from './use-packs-handlers'

type UsePacksDataType = () => [
  { handlePacksSearch: HandlePacksSearchType },
  PacksTableDataType,
  { handleSliderChange: HandleSliderChangeType },
  { handleToggleButton: HandleToggleButtonType },
  { handleClearFilters: HandleClearFiltersType },
  { modalHandlers: PackModalsHandlersType & PacksModalsHandlersType }
]

export const usePacksData: UsePacksDataType = () => {
  const { data: userData } = useAuthorised()
  const user_id = userData?._id

  const [packsTableParams, setPacksTableParams] =
    useState<PacksTableParamsType>({
      pagination: {
        current: 1,
        pageSize: 10,
      },
      field: '',
      order: null,
      searchValue: '',
      minCardsCount: undefined,
      maxCardsCount: undefined,
      activeButton: 'All',
    })
  const {
    data: data,
    refetch: refetchPacks,
    isLoading: isPacksLoading,
    isFetching: isPacksFetching,
    error: cardsPacksQueryError,
  } = useCardPacksQuery({
    page: packsTableParams.pagination?.current,
    pageCount: packsTableParams.pagination?.pageSize,
    sortPacks: getSortingParam(packsTableParams),
    user_id:
      packsTableParams.activeButton === MY_BUTTON_NAME ? user_id : undefined,
    packName: packsTableParams.searchValue || undefined,
    min: packsTableParams.minCardsCount,
    max: packsTableParams.maxCardsCount,
  })

  const [mutations, actionsLoading, actionsError] =
    usePackMutations(refetchPacks)

  const isPacksDataLoading = isPacksLoading || isPacksFetching || actionsLoading

  const serverError = cardsPacksQueryError || actionsError

  const {
    handlePacksTableChange,
    handlePacksSearch,
    handleSliderChange,
    handleToggleButton,
    handleClearFilters,
    modalHandlers,
  } = usePacksHandlers(setPacksTableParams, mutations)

  const packsTableColumns = getPacksTableColumns(
    packsTableParams.activeButton,
    userData,
    modalHandlers.deletePackModal,
    modalHandlers.updatePackModal
  )

  return [
    { handlePacksSearch },
    {
      isPacksDataLoading,
      handlePacksTableChange,
      packsTableParams,
      data,
      packsTableColumns,
      serverError,
    },
    { handleSliderChange },
    { handleToggleButton },
    { handleClearFilters },
    { modalHandlers },
  ]
}
