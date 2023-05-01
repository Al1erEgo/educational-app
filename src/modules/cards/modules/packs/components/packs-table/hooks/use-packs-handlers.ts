import { Dispatch, SetStateAction, useCallback } from 'react'

import {
  ActionsHandlersType,
  HandlePacksSearchType,
  HandlePacksTableChangeType,
  MutationsWithConditionsPackType,
  PacksTableParamsType,
} from '../types'

type UsePacksHandlersType = (
  setPacksTableParams: Dispatch<SetStateAction<PacksTableParamsType>>,
  packsActions: MutationsWithConditionsPackType,
  packsId: string
) => {
  handlePacksTableChange: HandlePacksTableChangeType
  handlePacksSearch: HandlePacksSearchType
  actionsHandlers: ActionsHandlersType
  handleAddNewPack: any
  handleSliderChange: any
  handleToggleButton: any
  clearFilters: any
}

export const usePacksHandlers: UsePacksHandlersType = (
  setPacksTableParams,
  packsActions,
  packsId
) => {
  const [{ addPacks, updatePacks, deletePacks }] = packsActions
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

  const clearFilters = () => {
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
    clearFilters()
  }

  const handleAddNewPack = async () =>
    await addPacks.handlers({
      cardsPack: { name: `test pack ${Math.round(Math.random() + 100)}` },
    })

  const handleLearn = () => console.log('record')
  const handleEdit = async () =>
    await updatePacks.handlers({ cardsPack: { _id: packsId, name: 'new-name' } })

  const handleDelete = async () => await deletePacks.handlers({ id: packsId })

  const actionsHandlers = {
    handleLearn,
    handleEdit,
    handleDelete,
  }

  return {
    handlePacksTableChange,
    handlePacksSearch,
    actionsHandlers,
    handleAddNewPack,
    handleSliderChange,
    handleToggleButton,
    clearFilters,
  }
}
