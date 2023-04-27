import { useState } from 'react'

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

export type SetSearchParamType = (searchValue: string) => void
type UseCardsPackDataType = () => [
  { packName: string },
  { titleButtonName: string; titleButtonOnclickHandler: () => void },
  { setSearchParam: SetSearchParamType },
  {
    isPackDataLoading: boolean
    handleTableChange: HandleTableChangeType
    tableParams: PackTableParamsType
    tableData: CardsResponseType | undefined
    tableColumns: PackTableColumnsType[]
  },
  { error: FetchBaseQueryError | SerializedError | undefined }
]

export const useCardsPackData: UseCardsPackDataType = () => {
  const { packId, packName = '' } = useParams()
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
    data: tableData,
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
  const {
    handler: deleteCard,
    isLoading: isCardDeleting,
    error: deleteCardError,
  } = useHandleAction('deleteCard', refetchPack)

  const {
    handler: addCard,
    isLoading: isCardAdding,
    error: addCardError,
  } = useHandleAction('addCard', refetchPack)
  const {
    handler: updateCard,
    isLoading: isCardUpdating,
    error: updateCardError,
  } = useHandleAction('updateCard', refetchPack)

  const handleAddCard = () => addCard({ card: { cardsPack_id: packId || '', grade: 4 } })
  const handleLearnPack = () => {}

  const handleTableChange: HandleTableChangeType = (pagination, filters, sorter) => {
    setTableParams(prevState => ({
      ...prevState,
      pagination,
      ...sorter,
    }))
  }
  const isMinePack = authData?._id === tableData?.packUserId
  const isPackDataLoading =
    isInitialLoading || isFetching || isCardAdding || isCardDeleting || isCardUpdating
  const error = cardsPackQueryError || addCardError || deleteCardError || updateCardError

  const titleButtonName = isMinePack ? 'Add new card' : 'Learn pack'
  const titleButtonOnclickHandler = isMinePack ? handleAddCard : handleLearnPack

  const setSearchParam: SetSearchParamType = searchValue =>
    setTableParams(prevState => ({ ...prevState, searchValue }))
  const tableColumns = getTableColumns(isMinePack, deleteCard, updateCard)

  return [
    { packName },
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
