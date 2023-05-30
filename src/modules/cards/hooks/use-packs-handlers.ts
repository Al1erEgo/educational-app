import React, { useCallback } from 'react'

import { TablePaginationConfig } from 'antd/es/table/InternalTable'

import { useCardsModals } from '@/modules/cards/hooks/use-cards-modals'
import {
  CardsModalsHandlersType,
  CardsMutationsObjType,
  HandleClearFiltersType,
  HandlePacksSearchType,
  HandlePacksTableChangeType,
  HandleSliderChangeType,
  HandleToggleButtonType,
  PacksTableParamsType,
} from '@/modules/cards/types'

type SearchParamsType = {
  setSearchValue: (searchValue: string) => void
  setPagination: (pagination: TablePaginationConfig) => void
}

type UsePacksHandlersType = (
  setTableParams: React.Dispatch<React.SetStateAction<PacksTableParamsType>>,
  searchParams: SearchParamsType,
  mutations: CardsMutationsObjType
) => {
  handleTableChange: HandlePacksTableChangeType
  handlePacksSearch: HandlePacksSearchType
  handleSliderChange: HandleSliderChangeType
  handleToggleButton: HandleToggleButtonType
  handleClearFilters: HandleClearFiltersType
  modalHandlers: CardsModalsHandlersType
}

export const usePacksHandlers: UsePacksHandlersType = (
  setTableParams,
  searchParams,
  mutations
) => {
  const modalHandlers = useCardsModals(mutations)

  const handlePacksSearch: HandlePacksSearchType = searchValue => {
    setTableParams(prevState => ({ ...prevState, searchValue }))
    searchParams.setSearchValue(searchValue)
  }

  const handleTableChange: HandlePacksTableChangeType = (
    pagination,
    filters,
    sorter
  ) => {
    const { current, pageSize } = pagination

    setTableParams(prevState => ({
      ...prevState,
      pagination,
      ...sorter,
    }))
    searchParams.setPagination({ current, pageSize })
  }

  const handleSliderChange: HandleSliderChangeType = useCallback(value => {
    if (Array.isArray(value)) {
      setTableParams(prevState => ({
        ...prevState,
        minCardsCount: value[0],
        maxCardsCount: value[1],
      }))
    }
  }, [])

  const handleClearFilters: HandleClearFiltersType = () => {
    setTableParams(prevState => ({
      ...prevState,
      pagination: {
        current: 1,
        pageSize: 10,
      },
      field: '',
      order: null,
      sortPacks: '',
      searchValue: '',
      minCardsCount: undefined,
      maxCardsCount: undefined,
    }))
    searchParams.setSearchValue('')
    searchParams.setPagination({})
  }
  const handleToggleButton: HandleToggleButtonType = buttonName => {
    setTableParams(prevState => ({
      ...prevState,
      activeButton: buttonName,
    }))
    handleClearFilters()
  }

  return {
    handleTableChange,
    handlePacksSearch,
    handleSliderChange,
    handleToggleButton,
    handleClearFilters,
    modalHandlers,
  }
}

/*import React, { useCallback, useEffect } from 'react'

 import { useNavigate, useSearchParams } from 'react-router-dom'

 import { useCardsModals } from '@/modules/cards/hooks/use-cards-modals'
 import {
 CardsModalsHandlersType,
 CardsMutationsObjType,
 HandleClearFiltersType,
 HandlePacksSearchType,
 HandlePacksTableChangeType,
 HandleSliderChangeType,
 HandleToggleButtonType,
 PacksTableParamsType,
 } from '@/modules/cards/types'

 type UsePacksHandlersType = (
 setTableParams: React.Dispatch<React.SetStateAction<PacksTableParamsType>>,
 tableParams: any,
 mutations: CardsMutationsObjType
 ) => {
 handleTableChange: HandlePacksTableChangeType
 handlePacksSearch: HandlePacksSearchType
 handleSliderChange: HandleSliderChangeType
 handleToggleButton: HandleToggleButtonType
 handleClearFilters: HandleClearFiltersType
 modalHandlers: CardsModalsHandlersType
 }

 export const usePacksHandlers: UsePacksHandlersType = (
 setTableParams,
 tableParams,
 mutations
 ) => {
 const modalHandlers = useCardsModals(mutations)

 const [searchParams, setSearchParams] = useSearchParams({
 search: '',
 current: '',
 pageSize: '',
 })
 const navigate = useNavigate()

 // Function to retrieve the search parameter from the URL and set it in the component state
 const initializeSearchParams = () => {
 const searchValue = searchParams.get('search') || ''

 setTableParams(prevState => ({ ...prevState, searchValue }))
 }

 // Call the initializeSearchParams function when the component mounts
 useEffect(() => {
 initializeSearchParams()
 }, [])

 const handlePacksSearch: HandlePacksSearchType = searchValue => {
 setTableParams(prevState => ({ ...prevState, searchValue }))
 setSearchParams(prevSearchParams => ({
 ...prevSearchParams,
 search: searchValue,
 }))
 localStorage.setItem('searchValue', searchValue)
 const params = new URLSearchParams(searchParams.toString())

 params.set('search', searchValue)

 navigate(`/cards/packs?${params}`)
 }

 const handleTableChange: HandlePacksTableChangeType = (
 pagination,
 filters,
 sorter
 ) => {
 setTableParams(prevState => ({
 ...prevState,
 pagination,
 ...sorter,
 }))
 setSearchParams(prevSearchParams => ({
 ...prevSearchParams,
 pagination: JSON.stringify({
 current: pagination.current,
 pageSize: pagination.pageSize,
 }),
 }))
 localStorage.setItem('pagination', JSON.stringify(pagination))
 const params = new URLSearchParams({
 search: tableParams.searchValue,
 current: String(pagination.current),
 pageSize: String(pagination.pageSize),
 })

 navigate(`/cards/packs?${params.toString()}`)
 }

 const handleSliderChange: HandleSliderChangeType = useCallback(value => {
 if (Array.isArray(value)) {
 setTableParams(prevState => ({
 ...prevState,
 minCardsCount: value[0],
 maxCardsCount: value[1],
 }))
 }
 }, [])

 const handleClearFilters: HandleClearFiltersType = () => {
 setTableParams(prevState => ({
 ...prevState,
 pagination: {
 current: 1,
 pageSize: 10,
 },
 field: '',
 order: null,
 sortPacks: '',
 searchValue: '',
 minCardsCount: undefined,
 maxCardsCount: undefined,
 }))

 setSearchParams({})
 localStorage.removeItem('searchValue')
 localStorage.removeItem('pagination')
 }
 const handleToggleButton: HandleToggleButtonType = buttonName => {
 setTableParams(prevState => ({
 ...prevState,
 activeButton: buttonName,
 }))
 handleClearFilters()
 }

 return {
 handleTableChange,
 handlePacksSearch,
 handleSliderChange,
 handleToggleButton,
 handleClearFilters,
 modalHandlers,
 }
 }*/
