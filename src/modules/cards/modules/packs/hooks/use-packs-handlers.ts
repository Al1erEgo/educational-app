import { Dispatch, SetStateAction, useCallback } from 'react'

import {
  HandleClearFiltersType,
  HandlePacksSearchType,
  HandlePacksTableChangeType,
  HandleSliderChangeType,
  HandleToggleButtonType,
  MutationsPackObjType,
  PacksTableParamsType,
} from '../types'
import { PacksModalsHandlersType } from '../types/packs-modals'

import { usePacksModals } from './use-packs-modals'

type UsePacksHandlersType = (
  setPacksTableParams: Dispatch<SetStateAction<PacksTableParamsType>>,
  mutations: MutationsPackObjType
) => {
  handlePacksTableChange: HandlePacksTableChangeType
  handlePacksSearch: HandlePacksSearchType
  handleSliderChange: HandleSliderChangeType
  handleToggleButton: HandleToggleButtonType
  handleClearFilters: HandleClearFiltersType
  modalHandlers: PacksModalsHandlersType
}

export const usePacksHandlers: UsePacksHandlersType = (
  setPacksTableParams,
  mutations
) => {
  const modalHandlers = usePacksModals(mutations)

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
