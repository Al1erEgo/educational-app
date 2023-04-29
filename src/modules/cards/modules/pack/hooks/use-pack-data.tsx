import { useState } from 'react'

import { useParams } from 'react-router-dom'

import { useAuthorised } from '../../../../auth/hooks'
import { useCardsPackQuery } from '../../../api'
import { TableDataType } from '../../../types'
import { ButtonsHandlersType, HandleSearchType, PackTableParamsType } from '../types'
import { getSortingParam, getTableColumns } from '../utils'

import { usePackHandlers } from './use-pack-handlers'
import { usePackMutations } from './use-pack-mutations'

type UsePackDataType = () => [
  { packName: string; isOwnPack: boolean; buttonsHandlers: ButtonsHandlersType },
  { handleSearch: HandleSearchType },
  TableDataType
]

export const usePackData: UsePackDataType = () => {
  const { packId = '', packName = '' } = useParams()
  const { data: authData } = useAuthorised()

  const [tableParams, setTableParams] = useState<PackTableParamsType>({
    pagination: {
      current: 1,
      pageSize: 10,
    },
    field: '',
    order: null,
    searchValue: '',
  })

  const {
    data: responseData,
    refetch: refetchPack,
    isLoading: isInitialLoading,
    isFetching,
    error: cardsPackQueryError,
  } = useCardsPackQuery({
    cardsPack_id: packId + '',
    page: tableParams.pagination?.current,
    pageCount: tableParams.pagination?.pageSize,
    sortCards: getSortingParam(tableParams),
    cardQuestion: tableParams.searchValue,
  })

  const isOwnPack = authData?._id === responseData?.packUserId

  const packMutations = usePackMutations(refetchPack)
  const [{ deleteCard, updateCard }, actionsLoading, actionsError] = packMutations

  const isPackDataLoading = isInitialLoading || isFetching || actionsLoading
  const serverError = cardsPackQueryError || actionsError

  const tableColumns = getTableColumns(isOwnPack, deleteCard.handler, updateCard.handler)

  const { handleTableChange, handleSearch, buttonsHandlers } = usePackHandlers(
    setTableParams,
    packMutations,
    packId
  )

  return [
    { packName, isOwnPack, buttonsHandlers },
    { handleSearch },
    {
      isPackDataLoading,
      handleTableChange,
      tableParams,
      responseData,
      tableColumns,
      serverError,
    },
  ]
}
