import { Dispatch, useState } from 'react'

import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { useParams } from 'react-router-dom'

import { useAuthorised } from '../../../../../auth/hooks'
import { CardsResponseType, useCardsPackQuery, useDeleteCardMutation } from '../../../../api'
import { HandleTableChangeType, PackTableParamsType } from '../../components/pack-table/types'
import { getSortingParam } from '../../components/pack-table/utils'
import { useHandleAction } from '../use-handle-action'

type useCardsPackDataType = () => [
  { titleButtonName: string; titleButtonOnclickHandler: () => void },
  { setSearchParam: Dispatch<string | undefined> },
  {
    isPackDataLoading: boolean
    handleTableChange: HandleTableChangeType
    tableParams: PackTableParamsType
    tableData: CardsResponseType | undefined
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
    data,
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
  const [deleteCard, { isLoading: isCardDeleting, error: deleteCardError }] =
    useDeleteCardMutation()

  const {
    handler: addCard,
    isLoading: isCardAdding,
    error: addCardError,
  } = useHandleAction('addCard', refetch)

  const handleAddCard = () => addCard({ card: { cardsPack_id: packId || '', grade: 4 } })
  const handleLearnPack = () => {}

  const handleTableChange: HandleTableChangeType = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      ...sorter,
    })
  }
  const isMinePack = authData?._id === data?.packUserId
  const isPackDataLoading = isInitialLoading || isFetching || isCardAdding || isCardDeleting
  const error = cardsPackQueryError || addCardError || deleteCardError
  const titleButtonName = isMinePack ? 'Add new card' : 'Learn pack'
  const titleButtonOnclickHandler = isMinePack ? handleAddCard : handleLearnPack

  // const tableColumns = getTableColumns(isMinePack)

  return [
    { titleButtonName, titleButtonOnclickHandler },
    { setSearchParam },
    { isPackDataLoading, handleTableChange, tableParams, tableData: data },
    { error },
  ]
}
