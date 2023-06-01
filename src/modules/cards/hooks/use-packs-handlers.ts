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
  setSliderChanged: (sliderValues: [number, number]) => void
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

  debugger

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
        minSliderValue: value[0],
        maxSliderValue: value[1],
      }))
    }
    searchParams.setSliderChanged(value as [number, number])
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
      minSliderValue: undefined,
      maxSliderValue: undefined,
    }))
    searchParams.setSearchValue('')
    searchParams.setPagination({})
    searchParams.setSliderChanged([0, 0])
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
