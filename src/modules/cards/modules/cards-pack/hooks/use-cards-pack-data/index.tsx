import { Dispatch, useState } from 'react'

import { useParams } from 'react-router-dom'

import { useAuthorised } from '../../../../../auth/hooks'
import { CardsResponseType, useCardsPackQuery, useNewCardMutation } from '../../../../api'
import { HandleTableChangeType, PackTableParamsType } from '../../components/pack-table/types'
import { getSortingParam } from '../../components/pack-table/utils'

type useCardsPackDataType = () => [
  { titleButtonName: string; titleButtonOnclickHandler: () => void },
  { setSearchParam: Dispatch<string | undefined> },
  {
    isPackDataLoading: boolean
    handleTableChange: HandleTableChangeType
    tableParams: PackTableParamsType
    tableData: CardsResponseType | undefined
  }
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
  } = useCardsPackQuery({
    cardsPack_id: packId + '',
    page: tableParams.pagination?.current,
    pageCount: tableParams.pagination?.pageSize,
    sortCards: getSortingParam(tableParams),
    cardQuestion: searchParam,
  })

  const [addNewCard, { isLoading: isCardAdding }] = useNewCardMutation()

  const titleButtonName = authData?._id === data?.packUserId ? 'Add new card' : 'Learn pack'
  const handleAddCard = async () => {
    await addNewCard({ card: { cardsPack_id: packId || '', grade: 4 } })
    refetch()
  }

  const handleTableChange: HandleTableChangeType = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      ...sorter,
    })
  }

  const isPackDataLoading = isInitialLoading || isFetching || isCardAdding

  return [
    { titleButtonName, titleButtonOnclickHandler: handleAddCard },
    { setSearchParam },
    { isPackDataLoading, handleTableChange, tableParams, tableData: data },
  ]
}
