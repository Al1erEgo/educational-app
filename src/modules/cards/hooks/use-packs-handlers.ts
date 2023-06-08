import React from 'react'

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

type SearchActionsType = {
  setSearchValue: (searchValue: string) => void
  setPagination: (pagination: TablePaginationConfig) => void
  setSliderChanged: (
    sliderValues: [number | undefined, number | undefined]
  ) => void
  setToggleButton: (buttonName: string) => void
  clearParams: () => void
}

type UsePacksHandlersType = (
  setTableParams: React.Dispatch<React.SetStateAction<PacksTableParamsType>>,
  mutations: CardsMutationsObjType,
  tableParams: PacksTableParamsType,
  setSearchParams: any
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
  mutations,
  tableParams,
  setSearchParams
) => {
  const modalHandlers = useCardsModals(mutations)

  const handlePacksSearch: HandlePacksSearchType = searchValue => {
    setTableParams(prevState => ({ ...prevState, searchValue }))
    //searchActions.setSearchValue(searchValue)
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
    //searchActions.setPagination({ current, pageSize })
  }

  const handleSliderChange: HandleSliderChangeType = value => {
    if (Array.isArray(value)) {
      setTableParams(prevState => ({
        ...prevState,
        minSlider: value[0],
        maxSlider: value[1],
      }))
    }
    //searchActions.setSliderChanged(value as [number, number])
  }

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
      minSlider: undefined,
      maxSlider: undefined,
    }))

    //searchActions.clearParams()
  }
  const handleToggleButton: HandleToggleButtonType = buttonName => {
    setTableParams(prevState => ({
      ...prevState,
      activeButton: buttonName,
    }))

    handleClearFilters()
    //searchActions.setToggleButton(buttonName)
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
