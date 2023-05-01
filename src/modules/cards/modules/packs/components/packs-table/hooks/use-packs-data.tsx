import { useState } from 'react'

import { useAuthorised } from '../../../../../../auth/hooks'
import { useCardPacksQuery } from '../../../../../api'
import { MY_BUTTON_NAME } from '../../../../../constants'
import {
  ActionsHandlersType,
  HandlePacksSearchType,
  PacksTableDataType,
  PacksTableParamsType,
} from '../types'
import { getPacksTableColumns } from '../utils/get-packs-table-columns'
import { getSortingPacksParam } from '../utils/get-sorting-packs-param'

import { usePacksHandlers } from './use-packs-handlers'
import { usePacksMutations } from './use-packs-mutations'

type UsePacksDataType = () => [
  { actionsHandlers: ActionsHandlersType },
  { handlePacksSearch: HandlePacksSearchType },
  PacksTableDataType,
  { handleAddNewPack: any },
  { handleSliderChange: any },
  { handleToggleButton: any },
  { clearFilters: any }
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

  const packsMutations = usePacksMutations(refetchPacks)
  const [{ addPacks, updatePacks, deletePacks }, actionsLoading, actionsError] = packsMutations

  const isPacksDataLoading = isPacksLoading || isPacksFetching || actionsLoading
  const serverError = cardsPacksQueryError || actionsError

  const packsTableColumns = getPacksTableColumns(
    packsTableParams.activeButton,
    userData,
    addPacks.handlers,
    updatePacks.handlers,
    deletePacks.handlers
  )

  const {
    handlePacksTableChange,
    handlePacksSearch,
    actionsHandlers,
    handleAddNewPack,
    handleSliderChange,
    handleToggleButton,
    clearFilters,
  } = usePacksHandlers(setPacksTableParams, packsMutations, '')

  return [
    { actionsHandlers },
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
    { clearFilters },
  ]
}
