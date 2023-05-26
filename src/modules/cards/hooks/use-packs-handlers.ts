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
  setPacksTableParams: React.Dispatch<
    React.SetStateAction<PacksTableParamsType>
  >,
  mutations: CardsMutationsObjType
) => {
  handlePacksTableChange: HandlePacksTableChangeType
  handlePacksSearch: HandlePacksSearchType
  handleSliderChange: HandleSliderChangeType
  handleToggleButton: HandleToggleButtonType
  handleClearFilters: HandleClearFiltersType
  modalHandlers: CardsModalsHandlersType
}

export const usePacksHandlers: UsePacksHandlersType = (
  setPacksTableParams,
  mutations
) => {
  const modalHandlers = useCardsModals(mutations)

  const handlePacksSearch: HandlePacksSearchType = searchValue =>
    setPacksTableParams(prevState => ({ ...prevState, searchValue }))

  const handlePacksTableChange: HandlePacksTableChangeType = (
    pagination,
    filters,
    sorter
  ) => {
    setPacksTableParams(prevState => ({
      ...prevState,
      pagination,
      ...sorter,
    }))
  }

  const handleSliderChange: HandleSliderChangeType = useCallback(value => {
    if (Array.isArray(value)) {
      setPacksTableParams(prevState => ({
        ...prevState,
        minCardsCount: value[0],
        maxCardsCount: value[1],
      }))
    }
  }, [])

  const handleClearFilters: HandleClearFiltersType = () => {
    setPacksTableParams(prevState => ({
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
    setPacksTableParams(prevState => ({
      ...prevState,
      activeButton: buttonName,
    }))
    handleClearFilters()
  }

  return {
    handlePacksTableChange,
    handlePacksSearch,
    handleSliderChange,
    handleToggleButton,
    handleClearFilters,
    modalHandlers,
  }
}
