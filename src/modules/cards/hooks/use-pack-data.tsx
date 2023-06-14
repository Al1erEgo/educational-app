import { useEffect, useState } from 'react'

import { useCardsPackQuery } from '@/modules/cards/api'
import { useCardsMutations } from '@/modules/cards/hooks/use-cards-mutations'
import { usePackHandlers } from '@/modules/cards/hooks/use-pack-handlers'
import { usePackSearchParams } from '@/modules/cards/hooks/use-pack-search-params'
import { ButtonsHandlersType, HandleSearchType, PackTableDataType, PackTableParamsType } from '@/modules/cards/types'
import { getFormattedPackTableData, getPackTableColumns, getSortingParam } from '@/modules/cards/utils'

type UsePackDataType = () => [
  {
    packName: string
    packDeckCover?: string
    isEmptyPack: boolean
    isOwnPack: boolean
    buttonsHandlers: ButtonsHandlersType
  },
  { handleSearch: HandleSearchType },
  PackTableDataType
]

export const usePackData: UsePackDataType = () => {
  const { searchParams, setSearchParams } = usePackSearchParams()
  const { packId, isOwnPack, packName, searchValue, paginationCurrentPage, paginationPageSize } = searchParams

  const [tableParams, setTableParams] = useState<PackTableParamsType>({
    pagination: {
      current: paginationCurrentPage || 1,
      pageSize: paginationPageSize || 10,
    },
    field: '',
    order: null,
    searchValue: searchValue,
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

  const [mutations, mutationsLoading, mutationsError] = useCardsMutations(refetchPack)

  const { handleTableChange, handleSearch, buttonsHandlers, modalHandlers } = usePackHandlers(
    setTableParams,
    mutations,
    packId,
    packName,
    responseData
  )

  const isDataLoading = isInitialLoading || isFetching || mutationsLoading
  const serverError = cardsPackQueryError || mutationsError
  const elementsCount = responseData?.cardsTotalCount || 0
  const isEmptyPack = !elementsCount
  const packDeckCover = responseData?.packDeckCover

  const tableColumns = getPackTableColumns(isOwnPack, modalHandlers.deleteCardModal, modalHandlers.updateCardModal)

  const formattedTableData = getFormattedPackTableData(responseData)

  useEffect(() => {
    setSearchParams(tableParams)
  }, [tableParams])

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
