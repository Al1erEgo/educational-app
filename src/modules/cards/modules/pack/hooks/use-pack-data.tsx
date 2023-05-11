import { useState } from 'react'

import { useParams, useSearchParams } from 'react-router-dom'

import { useCardsPackQuery } from '../../../api'
import { TableDataType } from '../../../types'
import { ButtonsHandlersType, HandleSearchType, PackTableParamsType } from '../types'
import { getSortingParam, getTableColumns } from '../utils'

import { usePackHandlers } from './use-pack-handlers'
import { usePackMutations } from './use-pack-mutations'

type UsePackDataType = () => [
  {
    packName: string
    isEmptyPack: boolean
    isOwnPack: boolean
    buttonsHandlers: ButtonsHandlersType
  },
  { handleSearch: HandleSearchType },
  TableDataType
]

export const usePackData: UsePackDataType = () => {
  const { packId = '' } = useParams()

  const [searchParams, setSearchParams] = useSearchParams()
  const isOwnPack = searchParams.get('own') === 'true'
  const packName = searchParams.get('name') || ''
  const isEmptyPack = searchParams.get('isEmpty') === 'true'

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

  console.log('tableParams', tableParams)
  console.log('sortingOrder', getSortingParam(tableParams))

  const packMutations = usePackMutations(refetchPack)
  const [{ deleteCard, updateCard }, actionsLoading, actionsError] = packMutations

  const isPackDataLoading = isInitialLoading || isFetching || actionsLoading
  const serverError = cardsPackQueryError || actionsError

  const tableColumns = getTableColumns(isOwnPack, deleteCard.handler, updateCard.handler)

  const { handleTableChange, handleSearch, buttonsHandlers } = usePackHandlers(
    setTableParams,
    packMutations,
    packId,
    packName
  )

  return [
    { packName, isEmptyPack, isOwnPack, buttonsHandlers },
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
