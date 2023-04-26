import { Dispatch, useState } from 'react'

import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { useParams } from 'react-router-dom'

import { useAuthorised } from '../../../../../auth/hooks'
import { CardsResponseType, useCardsPackQuery } from '../../../../api'
import {
  HandleTableChangeType,
  PackTableColumnsType,
  PackTableParamsType,
} from '../../components/pack-table/types'
import { getSortingParam, getTableColumns } from '../../components/pack-table/utils'
import { useHandleAction } from '../use-handle-action'

type useCardsPackDataType = () => [
  { titleButtonName: string; titleButtonOnclickHandler: () => void },
  { setSearchParam: Dispatch<string | undefined> },
  {
    isPackDataLoading: boolean
    handleTableChange: HandleTableChangeType
    tableParams: PackTableParamsType
    tableData: CardsResponseType | undefined
    tableColumns: PackTableColumnsType[]
  },
  { error: FetchBaseQueryError | SerializedError | undefined }
]

export const useCardsPackData: useCardsPackDataType = () => {
  const { packId } = useParams<string>()
  const { data: authData } = useAuthorised()

  const [searchParam, setSearchParam] = useState<string>()
  const [tableParams, setTableParams] = useState<PackTableParamsType>({
    pagination: {
      current: 1,
      pageSize: 10,
    },
    field: '',
    order: null,
  })

  const {
    data: tableData,
    refetch,
    isLoading: isInitialLoading,
    isFetching,
    error: cardsPackQueryError,
  } = useCardsPackQuery({
    cardsPack_id: packId + '',
    page: tableParams.pagination?.current,
    pageCount: tableParams.pagination?.pageSize,
    sortCards: getSortingParam(tableParams),
    cardQuestion: searchParam,
  })
  const {
    handler: deleteCard,
    isLoading: isCardDeleting,
    error: deleteCardError,
  } = useHandleAction('deleteCard', refetch)

  const {
    handler: addCard,
    isLoading: isCardAdding,
    error: addCardError,
  } = useHandleAction('addCard', refetch)
  const {
    handler: updateCard,
    isLoading: isCardUpdating,
    error: updateCardError,
  } = useHandleAction('updateCard', refetch)

  const handleAddCard = () => addCard({ card: { cardsPack_id: packId || '', grade: 4 } })
  const handleLearnPack = () => {}

  const handleTableChange: HandleTableChangeType = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      ...sorter,
    })
  }
  const isMinePack = authData?._id === tableData?.packUserId
  const isPackDataLoading =
    isInitialLoading || isFetching || isCardAdding || isCardDeleting || isCardUpdating
  const error = cardsPackQueryError || addCardError || deleteCardError || updateCardError
  const titleButtonName = isMinePack ? 'Add new card' : 'Learn pack'
  const titleButtonOnclickHandler = isMinePack ? handleAddCard : handleLearnPack

  const tableColumns = getTableColumns(isMinePack, deleteCard, updateCard)

  return [
    { titleButtonName, titleButtonOnclickHandler },
    { setSearchParam },
    {
      isPackDataLoading,
      handleTableChange,
      tableParams,
      tableData,
      tableColumns,
    },
    { error },
  ]
}
