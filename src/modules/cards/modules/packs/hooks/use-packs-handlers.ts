import { Dispatch, SetStateAction, useCallback } from 'react'

import {
  HandleAddNewPackType,
  HandleClearFiltersType,
  HandlePacksSearchType,
  HandlePacksTableChangeType,
  HandleSliderChangeType,
  HandleToggleButtonType,
  MutationsPackObjType,
  PacksTableParamsType,
  SetEditModalFunctionType,
} from '../types'

type UsePacksHandlersType = (
  setPacksTableParams: Dispatch<SetStateAction<PacksTableParamsType>>,
  packsActions: MutationsPackObjType,
  packsId: string
) => {
  handlePacksTableChange: HandlePacksTableChangeType
  handlePacksSearch: HandlePacksSearchType
  handleAddNewPack: HandleAddNewPackType
  handleSliderChange: HandleSliderChangeType
  handleToggleButton: HandleToggleButtonType
  handleClearFilters: HandleClearFiltersType
  handleOk: (setEditModal: SetEditModalFunctionType, id?: string, newName?: string) => void
}

export const usePacksHandlers: UsePacksHandlersType = (setPacksTableParams, packsActions) => {
  const { addPacks, updatePacks } = packsActions
  const handlePacksSearch: HandlePacksSearchType = searchValue =>
    setPacksTableParams(prevState => ({ ...prevState, searchValue }))
  const handlePacksTableChange: HandlePacksTableChangeType = (pagination, filters, sorter) => {
    setPacksTableParams(prevState => ({
      ...prevState,
      pagination,
      ...sorter,
    }))
  }

  const handleSliderChange = useCallback((value: number | [number, number]) => {
    if (Array.isArray(value)) {
      setPacksTableParams(prevState => ({
        ...prevState,
        minCardsCount: value[0],
        maxCardsCount: value[1],
      }))
    }
  }, [])

  const handleClearFilters = () => {
    setPacksTableParams(prevState => ({
      ...prevState,
      pagination: {
        current: 1,
        pageSize: 10,
      },
      sortPacks: '',
      searchValue: '',
      minCardsCount: undefined,
      maxCardsCount: undefined,
    }))
  }

  const handleToggleButton = (buttonName: string) => {
    setPacksTableParams(prevState => ({
      ...prevState,
      activeButton: buttonName,
    }))
    handleClearFilters()
  }

  const handleAddNewPack = async (name: string) => {
    await addPacks.handlers({ cardsPack: { name: name } })
  }

  const handleOk = (setEditModal: SetEditModalFunctionType, id?: string, newName?: string) => {
    if (id) {
      updatePacks.handlers({ cardsPack: { _id: id, name: newName } })
      setEditModal(prevState => ({ ...prevState, open: false, id: undefined, name: newName }))
    }
  }

  return {
    handlePacksTableChange,
    handlePacksSearch,
    handleAddNewPack,
    handleSliderChange,
    handleToggleButton,
    handleClearFilters,
    handleOk,
  }
}