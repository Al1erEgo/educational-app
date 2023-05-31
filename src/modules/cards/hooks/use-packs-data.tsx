import { useState } from 'react'

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

  const { searchParams, setSearchValue, setPagination, setSliderChanged } =
    usePacksSearchParams()

  const searchValue = searchParams.get('search')
  const pagination = JSON.parse(searchParams.get('pagination') || '{}')

  const [sliderValues, setSliderValues] = useState<[number, number]>(() => {
    const minCardsCount = searchParams.get('minCardsCount')
    const maxCardsCount = searchParams.get('maxCardsCount')

    return [
      minCardsCount ? parseInt(minCardsCount) : 0,
      maxCardsCount ? parseInt(maxCardsCount) : 0,
    ]
  })

  const [tableParams, setTableParams] = useState<PacksTableParamsType>({
    pagination:
      pagination.current && pagination.pageSize
        ? pagination
        : { current: 1, pageSize: 10 },
    field: '',
    order: null,
    searchValue: searchValue || '',
    minCardsCount: sliderValues[0] || undefined,
    maxCardsCount: sliderValues[1] || undefined,
    activeButton: 'All',
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
    min: tableParams.minCardsCount,
    max: tableParams.maxCardsCount,
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
  } = usePacksHandlers(
    setTableParams,
    { setSearchValue, setPagination, setSliderChanged },
    mutations
  )

  const tableColumns = getPacksTableColumns(
    tableParams.activeButton,
    userData,
    modalHandlers.deletePackModal,
    modalHandlers.updatePackModal
  )

  const elementsCount = data?.cardPacksTotalCount || 0
  const minCardsCount = data?.minCardsCount || 0
  const maxCardsCount = data?.maxCardsCount || 0

  const formattedTableData = getFormattedPacksTableData(data)

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
      minCardsCount,
      maxCardsCount,
    },
    { handleSliderChange },
    { handleToggleButton },
    { handleClearFilters },
    { modalHandlers },
  ]
}

/*import { useEffect, useState } from 'react'

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

 const { searchParams, setSearchValue, setPagination, setSliderChanged } =
 usePacksSearchParams()

 const searchValue = searchParams.get('search')
 const pagination = JSON.parse(searchParams.get('pagination') || '{}')

 const [sliderValues, setSliderValues] = useState<[number, number]>(() => {
 const storedSliderValues = localStorage.getItem('sliderValues')

 console.log(storedSliderValues)

 return storedSliderValues ? JSON.parse(storedSliderValues) : [0, 0]
 })

 const [tableParams, setTableParams] = useState<PacksTableParamsType>({
 pagination:
 pagination.current && pagination.pageSize
 ? pagination
 : { current: 1, pageSize: 10 },
 field: '',
 order: null,
 searchValue: searchValue || '',
 minCardsCount: sliderValues[0] || undefined,
 maxCardsCount: sliderValues[1] || undefined,
 activeButton: 'All',
 })

 console.log(tableParams)

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
 min: tableParams.minCardsCount,
 max: tableParams.maxCardsCount,
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
 } = usePacksHandlers(
 setTableParams,
 { setSearchValue, setPagination, setSliderChanged },
 mutations
 )

 const tableColumns = getPacksTableColumns(
 tableParams.activeButton,
 userData,
 modalHandlers.deletePackModal,
 modalHandlers.updatePackModal
 )

 const elementsCount = data?.cardPacksTotalCount || 0
 const minCardsCount = data?.minCardsCount || 0
 const maxCardsCount = data?.maxCardsCount || 0

 const formattedTableData = getFormattedPacksTableData(data)

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
 minCardsCount,
 maxCardsCount,
 },
 { handleSliderChange },
 { handleToggleButton },
 { handleClearFilters },
 { modalHandlers },
 ]
 }
 */
