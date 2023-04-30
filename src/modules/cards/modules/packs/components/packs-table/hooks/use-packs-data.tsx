import { useState } from 'react'

import { useAuthorised } from '../../../../../../auth/hooks'
import { useCardPacksQuery } from '../../../../../api'
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
  PacksTableDataType
]

export const usePacksData: UsePacksDataType = () => {
  const [activeButton, setActiveButton] = useState<string>('All')

  const { data: userData } = useAuthorised()

  const [packsTableParams, setPacksTableParams] = useState<PacksTableParamsType>({
    pagination: {
      current: 1,
      pageSize: 10,
    },
    field: '',
    order: null,
    searchValue: '',
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
  })

  const packsMutations = usePacksMutations(refetchPacks)
  const [{ addPacks, updatePacks, deletePacks }, actionsLoading, actionsError] = packsMutations

  const isPacksDataLoading = isPacksLoading || isPacksFetching || actionsLoading
  const serverError = cardsPacksQueryError || actionsError

  const packsTableColumns = getPacksTableColumns(
    activeButton,
    userData,
    addPacks.handlers,
    updatePacks.handlers,
    deletePacks.handlers
  )

  const { handlePacksTableChange, handlePacksSearch, handleAddNewPack, actionsHandlers } =
    usePacksHandlers(setPacksTableParams, packsMutations, '')

  return [
    { actionsHandlers },
    { handlePacksSearch },
    {
      isPacksDataLoading,
      handlePacksTableChange,
      handleAddNewPack,
      packsTableParams,
      data,
      packsTableColumns,
      serverError,
    },
  ]
}
