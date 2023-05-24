import { useState } from 'react'

import { useParams, useSearchParams } from 'react-router-dom'

import { useCardsPackQuery } from '@/modules/cards/api'
import { useCardsMutations } from '@/modules/cards/hooks/use-cards-mutations'
import { usePackHandlers } from '@/modules/cards/hooks/use-pack-handlers'
import {
  ButtonsHandlersType,
  HandleSearchType,
  PackTableParamsType,
  TableDataType,
} from '@/modules/cards/types'
import {
  getFormattedPackTableData,
  getPackTableColumns,
  getSortingParam,
} from '@/modules/cards/utils'

type UsePackDataType = () => [
  {
    packName: string
    packDeckCover?: string
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

  const [mutations, mutationsLoading, mutationsError] =
    useCardsMutations(refetchPack)

  const { handleTableChange, handleSearch, buttonsHandlers, modalHandlers } =
    usePackHandlers(setTableParams, mutations, packId, packName)

  const isDataLoading = isInitialLoading || isFetching || mutationsLoading
  const serverError = cardsPackQueryError || mutationsError
  const elementsCount = responseData?.cardsTotalCount || 0
  const isEmptyPack = !elementsCount
  const packDeckCover = responseData?.packDeckCover

  const tableColumns = getPackTableColumns(
    isOwnPack,
    modalHandlers.deleteCardModal,
    modalHandlers.updateCardModal
  )

  const formattedTableData = getFormattedPackTableData(responseData)

  return [
    { packName, packDeckCover, isEmptyPack, isOwnPack, buttonsHandlers },
    { handleSearch },
    {
      isDataLoading,
      handleTableChange,
      tableParams,
      formattedTableData,
      elementsCount,
      tableColumns,
      serverError,
    },
  ]
}
