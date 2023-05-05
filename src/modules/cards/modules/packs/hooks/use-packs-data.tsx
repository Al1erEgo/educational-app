import { useState } from 'react'

import { useAuthorised } from '../../../../auth/hooks'
import { useCardPacksQuery } from '../../../api'
import { MY_BUTTON_NAME } from '../../../constants'
import {
  HandleAddNewPackType,
  HandleClearFiltersType,
  HandlePacksSearchType,
  HandleSliderChangeType,
  HandleToggleButtonType,
  PacksTableDataType,
  PacksTableParamsType,
} from '../types'
import { getPacksTableColumns, getSortingPacksParam } from '../utils'

import { usePacksHandlers } from './use-packs-handlers'
import { usePacksMutations } from './use-packs-mutations'

type UsePacksDataType = () => [
  { handlePacksSearch: HandlePacksSearchType },
  PacksTableDataType,
  { handleAddNewPack: HandleAddNewPackType },
  { handleSliderChange: HandleSliderChangeType },
  { handleToggleButton: HandleToggleButtonType },
  { handleClearFilters: HandleClearFiltersType }
]

export const usePacksData: UsePacksDataType = () => {
  const { data: userData } = useAuthorised()
  const user_id = userData?._id

  const [packsTableParams, setPacksTableParams] = useState<PacksTableParamsType>({
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
    sortPacks: getSortingPacksParam(packsTableParams),
    user_id: packsTableParams.activeButton === MY_BUTTON_NAME ? user_id : undefined,
    packName: packsTableParams.searchValue || undefined,
    min: packsTableParams.minCardsCount,
    max: packsTableParams.maxCardsCount,
  })

  const [packsActions, actionsLoading, actionsError] = usePacksMutations(refetchPacks)

  const isPacksDataLoading = isPacksLoading || isPacksFetching || actionsLoading
  const serverError = cardsPacksQueryError || actionsError

  const {
    handlePacksTableChange,
    handlePacksSearch,
    handleAddNewPack,
    handleSliderChange,
    handleToggleButton,
    handleClearFilters,
    handleOk,
  } = usePacksHandlers(setPacksTableParams, packsActions, '')

  const packsTableColumns = getPacksTableColumns(
    packsTableParams.activeButton,
    userData,
    packsActions.updatePacks.handlers,
    packsActions.deletePacks.handlers,
    handleOk
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
    { handleAddNewPack },
    { handleSliderChange },
    { handleToggleButton },
    { handleClearFilters },
  ]
}
