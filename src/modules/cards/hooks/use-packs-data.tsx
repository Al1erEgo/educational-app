import { useEffect, useState } from 'react'

import { useAuthorised } from '@/modules/auth/hooks'
import { useCardPacksQuery } from '@/modules/cards/api'
import { MY_BUTTON_NAME } from '@/modules/cards/constants'
import { useCardsMutations } from '@/modules/cards/hooks/use-cards-mutations'
import { usePacksHandlers } from '@/modules/cards/hooks/use-packs-handlers'
import { usePacksSearchParams } from '@/modules/cards/hooks/use-packs-search-params'
import {
  CardsModalsHandlersType,
  HandleClearFiltersType,
  HandlePacksSearchType,
  HandleSliderChangeType,
  HandleToggleButtonType,
  PacksTableDataType,
  PacksTableParamsType,
} from '@/modules/cards/types'
import {
  getFormattedPacksTableData,
  getPacksTableColumns,
  getSortingParam,
} from '@/modules/cards/utils'

type UsePacksDataType = () => [
  { handlePacksSearch: HandlePacksSearchType },
  PacksTableDataType,
  { handleSliderChange: HandleSliderChangeType },
  { handleToggleButton: HandleToggleButtonType },
  { handleClearFilters: HandleClearFiltersType },
  { modalHandlers: CardsModalsHandlersType }
]

export const usePacksData: UsePacksDataType = () => {
  const { data: userData } = useAuthorised()
  const user_id = userData?._id

  const { searchParams, setSearchParams } = usePacksSearchParams()

  const {
    searchValueParams,
    paginationCurrentPageParams,
    paginationPageSizeParams,
    minSliderParams,
    maxSliderParams,
    activeButtonParams,
  } = searchParams

  const [tableParams, setTableParams] = useState<PacksTableParamsType>({
    pagination: {
      current: paginationCurrentPageParams || 1,
      pageSize: paginationPageSizeParams || 10,
    },
    field: '',
    order: null,
    searchValue: searchValueParams,
    minSlider: minSliderParams,
    maxSlider: maxSliderParams,
    activeButton: activeButtonParams,
  })

  const {
    data: data,
    refetch: refetchPacks,
    isLoading: isPacksLoading,
    isFetching: isPacksFetching,
    error: cardsPacksQueryError,
  } = useCardPacksQuery({
    page: tableParams.pagination?.current,
    pageCount: tableParams.pagination?.pageSize,
    sortPacks: getSortingParam(tableParams),
    user_id: tableParams.activeButton === MY_BUTTON_NAME ? user_id : undefined,
    packName: tableParams.searchValue || undefined,
    min: tableParams.minSlider,
    max: tableParams.maxSlider,
  })

  const [mutations, actionsLoading, actionsError] =
    useCardsMutations(refetchPacks)

  const isDataLoading = isPacksLoading || isPacksFetching || actionsLoading

  const serverError = cardsPacksQueryError || actionsError

  const {
    handleTableChange,
    handlePacksSearch,
    handleSliderChange,
    handleToggleButton,
    handleClearFilters,
    modalHandlers,
  } = usePacksHandlers(setTableParams, mutations)

  const tableColumns = getPacksTableColumns(
    tableParams.activeButton,
    userData,
    modalHandlers.deletePackModal,
    modalHandlers.updatePackModal
  )

  const elementsCount = data?.cardPacksTotalCount || 0
  const minSliderUserValue = data?.minCardsCount
  const maxSliderUserValue = data?.maxCardsCount

  const formattedTableData = getFormattedPacksTableData(data)

  useEffect(() => {
    setSearchParams(tableParams)
  }, [tableParams])

  return [
    { handlePacksSearch },
    {
      isDataLoading,
      handleTableChange,
      tableParams,
      formattedTableData,
      elementsCount,
      tableColumns,
      serverError,
      minSliderUserValue,
      maxSliderUserValue,
    },
    { handleSliderChange },
    { handleToggleButton },
    { handleClearFilters },
    { modalHandlers },
  ]
}
