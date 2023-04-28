import { useState } from 'react'

import { useParams } from 'react-router-dom'

import { useAuthorised } from '../../../../../auth/hooks'
import { CardsResponseType, useCardsPackQuery } from '../../../../api'
import { TableErrorType } from '../../../../types'
import {
  HandleTableChangeType,
  PackTableColumnsType,
  PackTableParamsType,
} from '../../components/pack-table/types'
import { getSortingParam, getTableColumns } from '../../components/pack-table/utils'
import { ButtonsHandlersType, useCardsPackHandlers } from '../use-cards-pack-handlers'
import { usePackActions } from '../use-pack-actions'

export type TableDataType = {
  isPackDataLoading: boolean
  handleTableChange: HandleTableChangeType
  tableParams: PackTableParamsType
  responseData: CardsResponseType | undefined
  tableColumns: PackTableColumnsType[]
  serverError: TableErrorType
}
export type HandleSearchType = (searchValue: string) => void
type UseCardsPackDataType = () => [
  { packName: string; isOwnPack: boolean; buttonsHandlers: ButtonsHandlersType },
  { handleSearch: HandleSearchType },
  TableDataType
]

export const useCardsPackData: UseCardsPackDataType = () => {
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

  const packActions = usePackActions(refetchPack)
  const [{ deleteCard, updateCard }, actionsLoading, actionsError] = packActions

  const isPackDataLoading = isInitialLoading || isFetching || actionsLoading
  const serverError = cardsPackQueryError || actionsError

  const tableColumns = getTableColumns(isOwnPack, deleteCard.handler, updateCard.handler)

  const { handleTableChange, handleSearch, buttonsHandlers } = useCardsPackHandlers(
    setTableParams,
    packActions,
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
