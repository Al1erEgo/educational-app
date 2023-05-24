import { useState } from 'react'

import { useAuthorised } from '@/modules/auth/hooks'
import { useCardPacksQuery } from '@/modules/cards/api'
import { MY_BUTTON_NAME } from '@/modules/cards/constants'
import { useCardsMutations } from '@/modules/cards/hooks/use-cards-mutations'
import { usePacksHandlers } from '@/modules/cards/hooks/use-packs-handlers'
import {
  CardsModalsHandlersType,
  HandleClearFiltersType,
  HandlePacksSearchType,
  HandleSliderChangeType,
  HandleToggleButtonType,
  PacksTableDataType,
  PacksTableParamsType,
} from '@/modules/cards/types'
import { getPacksTableColumns, getSortingParam } from '@/modules/cards/utils'

type UsePacksDataType = () => [
  { handlePacksSearch: HandlePacksSearchType },
  PacksTableDataType,
  { handleSliderChange: HandleSliderChangeType },
  { handleToggleButton: HandleToggleButtonType },
  { handleClearFilters: HandleClearFiltersType },
  { modalHandlers: CardsModalsHandlersType }
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
    useCardsMutations(refetchPacks)

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
