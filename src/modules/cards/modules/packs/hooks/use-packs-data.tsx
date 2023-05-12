import { useState } from 'react'

import { useAuthorised } from '../../../../auth/hooks'
import { useCardPacksQuery } from '../../../api'
import { MY_BUTTON_NAME } from '../../../constants'
import { getSortingParam } from '../../../utils'
import {
  HandleAddNewPackType,
  HandleClearFiltersType,
  HandlePacksSearchType,
  HandleSliderChangeType,
  HandleToggleButtonType,
  PacksTableDataType,
  PacksTableParamsType,
} from '../types'
import { getPacksTableColumns } from '../utils'

import { usePacksHandlers } from './use-packs-handlers'
import { usePacksMutations } from './use-packs-mutations'

type UsePacksDataType = () => [
  { handlePacksSearch: HandlePacksSearchType },
  PacksTableDataType,
  { handleAddNewPack: HandleAddNewPackType },
  { handleSliderChange: HandleSliderChangeType },
  { handleToggleButton: HandleToggleButtonType },
  { handleClearFilters: HandleClearFiltersType }
]

/**
 The custom hook that retrieves the authenticated user's data, the packs table parameters,
 the packs data, and the loading and error states for manipulating the packs data.
 The hook also retrieves functions for handling user actions on the packs table,
 such as searching, adding, updating, and deleting packs.

 @returns {Array} An array of functions and data related to packs table management.
 */
export const usePacksData: UsePacksDataType = () => {
  /**
     Retrieves the authenticated user's data, including their user ID.
     */
  const { data: userData } = useAuthorised()
  const user_id = userData?._id

  /**
   * The state for the packs table parameters, including pagination, sorting, search filters, and more.
   */
  const [packsTableParams, setPacksTableParams] =
    useState<PacksTableParamsType>({
      pagination: {
        current: 1,
        pageSize: 10,
      },
      field: '',
      order: null,
      searchValue: '',
      minCardsCount: undefined,
      maxCardsCount: undefined,
      activeButton: 'All',
    })

  /**
   * Retrieves the packs data from the API based on the current table parameters.
   */
  const {
    data: data,
    refetch: refetchPacks,
    isLoading: isPacksLoading,
    isFetching: isPacksFetching,
    error: cardsPacksQueryError,
  } = useCardPacksQuery({
    page: packsTableParams.pagination?.current,
    pageCount: packsTableParams.pagination?.pageSize,
    sortPacks: getSortingParam(packsTableParams),
    user_id:
      packsTableParams.activeButton === MY_BUTTON_NAME ? user_id : undefined,
    packName: packsTableParams.searchValue || undefined,
    min: packsTableParams.minCardsCount,
    max: packsTableParams.maxCardsCount,
  })

  /**
   * Uses the `usePacksMutations` hook to retrieve functions for creating, updating, and deleting card packs.
   */
  const [packsActions, actionsLoading, actionsError] =
    usePacksMutations(refetchPacks)

  /**
   * Calculates whether the packs data is still loading.
   */
  const isPacksDataLoading = isPacksLoading || isPacksFetching || actionsLoading

  /**
   * Retrieves any errors related to retrieving or manipulating packs data.
   */
  const serverError = cardsPacksQueryError || actionsError

  /**
   * Uses the `usePacksHandlers` hook to retrieve functions for handling user actions on the packs table.
   */
  const {
    handlePacksTableChange,
    handlePacksSearch,
    handleAddNewPack,
    handleSliderChange,
    handleToggleButton,
    handleClearFilters,
    handleOk,
    handleDeleteOk,
  } = usePacksHandlers(setPacksTableParams, packsActions, '')

  /**
   * Returns an array of table columns for the packs table.
   * @param {string} activeButton - The currently active button.
   * @param {object} userData - An object containing the data of the currently authorized user.
   * @param {Function} handleOk - A callback function to handle the OK button click.
   * @param {Function} handleDeleteOk - A callback function to handle the OK button click in the delete confirmation modal.
   * @returns {Array} - An array of table columns for the card packs table.
   */
  const packsTableColumns = getPacksTableColumns(
    packsTableParams.activeButton,
    userData,
    handleOk,
    handleDeleteOk
  )

  return [
    { handlePacksSearch },
    {
      isPacksDataLoading,
      handlePacksTableChange,
      packsTableParams,
      data,
      packsTableColumns,
      serverError,
    },
    { handleAddNewPack },
    { handleSliderChange },
    { handleToggleButton },
    { handleClearFilters },
  ]
}
