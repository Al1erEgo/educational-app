import React, { useCallback } from 'react'

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
  mutations
) => {
  const modalHandlers = useCardsModals(mutations)

  const handlePacksSearch: HandlePacksSearchType = searchValue =>
    setTableParams(prevState => ({ ...prevState, searchValue }))

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
