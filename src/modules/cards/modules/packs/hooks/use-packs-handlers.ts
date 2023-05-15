import { Dispatch, SetStateAction, useCallback } from 'react'

import {
  HandleAddNewPackType,
  HandleClearFiltersType,
  HandleDeleteOkType,
  HandleOkType,
  HandlePacksSearchType,
  HandlePacksTableChangeType,
  HandleSliderChangeType,
  HandleToggleButtonType,
  MutationsPackObjType,
  PacksTableParamsType,
} from '../types'

/**
 Type for the usePacksHandlers hook
 */
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
  handleOk: HandleOkType
  handleDeleteOk: HandleDeleteOkType
}

/**
 Custom hook for handling pack-related functionality

 @param setPacksTableParams - React state setter for packs table parameters
 @param packsActions - Object containing mutation functions for packs

 @returns Object containing handlers for pack-related functionality, including
 handling pack search, changing pack table parameters, changing slider values,
 clearing filters, toggling buttons, adding a new pack, updating a pack, and
 deleting a pack
 */
export const usePacksHandlers: UsePacksHandlersType = (setPacksTableParams, packsActions) => {
  const { addPacks, updatePacks, deletePacks } = packsActions

  /**
   Handler for searching packs
   @param searchValue - Search value entered by user
   */
  const handlePacksSearch: HandlePacksSearchType = searchValue =>
    setPacksTableParams(prevState => ({ ...prevState, searchValue }))

  /**
   Handler for changing packs table parameters, it takes in pagination, filters, and sorter
   objects and updates the packs table parameters accordingly
   @param pagination - Object containing current page and page size
   @param filters - Object containing current filters
   @param sorter - Object containing current sorting parameters
   */
  const handlePacksTableChange: HandlePacksTableChangeType = (pagination, filters, sorter) => {
    console.log('Table changed:', pagination, filters, sorter)
    setPacksTableParams(prevState => ({
      ...prevState,
      pagination,
      ...sorter,
    }))
  }
  /**
   Handler for changing slider values and updates the packs table parameters accordingly
   @param value - Value of slider
   */
  const handleSliderChange: HandleSliderChangeType = useCallback(value => {
    if (Array.isArray(value)) {
      setPacksTableParams(prevState => ({
        ...prevState,
        minCardsCount: value[0],
        maxCardsCount: value[1],
      }))
    }
  }, [])

  /**
   Handler for clearing filters and resets the packs table parameters to their default values
   */
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
  /**
   Handler for toggling buttons, it  takes a button name and
   updates the packs table parameters accordingly, while also calling the 'handleClearFilters' function
   @param buttonName - Name of button to toggle
   */
  const handleToggleButton: HandleToggleButtonType = buttonName => {
    setPacksTableParams(prevState => ({
      ...prevState,
      activeButton: buttonName,
    }))
    handleClearFilters()
  }

  /**
   Handler for adding a new pack
   @param id - Optional ID of pack to add
   @param name - Optional name of pack to add
   @param isPrivate - Optional boolean indicating whether pack is private
   */
  const handleAddNewPack: HandleAddNewPackType = async (
    id?: string,
    name?: string,
    isPrivate?: boolean
  ) => {
    await addPacks.handlers({ cardsPack: { name: name, private: isPrivate } })
  }

  /**
   Handler for updating a pack, it takes in an ID, new name, and boolean indicating whether
   the pack is private, and updates an existing pack using the 'updatePacks' mutation function

   @param id - Optional ID of pack to update
   @param newName - Optional new name for pack
   @param isPrivate - Optional boolean indicating whether pack is private
   */
  const handleOk: HandleOkType = (id?, newName?, isPrivate?) => {
    if (id) {
      updatePacks.handlers({ cardsPack: { _id: id, name: newName, private: isPrivate } })
    }
  }

  /**
   Handler for deleting a pack, it takes in an ID and deletes an existing pack
   using the 'deletePacks' mutation function

   @param id - Optional ID of pack to delete
   */
  const handleDeleteOk: HandleDeleteOkType = (id?) => {
    if (id) {
      deletePacks.handlers({ id })
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
    handleDeleteOk,
  }
}

/*  const handlePacksTableChange: HandlePacksTableChangeType = (pagination, filters, sorter) => {
 console.log('Table changed:', pagination, filters, sorter)

 let sortingParam: any

 if (Array.isArray(sorter)) {
 sortingParam = sorter.map(item => `${item.order === 'ascend' ? 0 : 1}${item.field}`).join(',')
 } else {
 if (sorter.order && sorter.field) {
 sortingParam = `${sorter.order === 'ascend' ? 0 : 1}${sorter.field}`
 } else {
 sortingParam = undefined
 }
 }

 setPacksTableParams(prevState => ({
 ...prevState,
 pagination,
 sorter: sorter as SorterResult<PackType>, // Add a type assertion here
 sortPacks: sortingParam,
 }))

 }*/

/*  const handlePacksTableChange: HandlePacksTableChangeType = (pagination, filters, sorter) => {
 let newSorter: SorterResult<PackType> = {}

 if (Array.isArray(sorter)) {
 newSorter = sorter[0]
 } else {
 newSorter = sorter
 }

 newSorter = {
 ...newSorter,
 order: newSorter?.order ? newSorter.order : undefined,
 field: newSorter?.field ? newSorter.field : undefined,
 }

 let sortingParam: string | undefined;

 if (newSorter.order && newSorter.field) {
 if (newSorter.order === 'ascend') {
 newSorter.order = 'descend'
 sortingParam = '0' + newSorter.field.toString()
 } else {
 newSorter.order = 'ascend'
 sortingParam = '1' + newSorter.field.toString()
 }
 } else {
 newSorter = {}
 sortingParam = undefined
 }

 setPacksTableParams(prevState => ({
 ...prevState,
 pagination,
 sorter: newSorter,
 sortPacks: sortingParam,
 }))
 }*/
