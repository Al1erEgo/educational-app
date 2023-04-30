import { ChangeEventHandler, useEffect, useState } from 'react'

import { HandleSearchType } from '../modules/pack/types'

type HandleOnSearchChangeType = ChangeEventHandler<HTMLInputElement>

type UseDebouncedSearchWithResetType = (
  searchValue: string,
  onSearch: HandleSearchType
) => { handleOnSearchChange: HandleOnSearchChangeType; localSearchValue: string }

/**
 * A hook that debounces search input and resets the local search value when the outside search value resets.
 * @typedef {Object} UseDebouncedSearchWithResetReturnType
 * @property {Function} handleOnSearchChange - A function to handle changes in search input.
 * @property {string} localSearchValue - The current local search value.
 * @typedef {function(searchValue: string, onSearch: Function): UseDebouncedSearchWithResetReturnType} UseDebouncedSearchWithResetType
 * @param {string} searchValue - The current search value.
 * @param {Function} onSearch - A callback function to handle the search.
 * @returns {UseDebouncedSearchWithResetReturnType} - An object containing the handleOnSearchChange function and the localSearchValue string.
 */

export const useDebouncedSearchWithReset: UseDebouncedSearchWithResetType = (
  searchValue,
  onSearch
) => {
  const [localSearchValue, setLocalSearchValue] = useState<string>('')

  const handleOnSearchChange: HandleOnSearchChangeType = e => setLocalSearchValue(e.target.value)

  // reset local search value when search value changes
  useEffect(() => {
    if (!searchValue) {
      setLocalSearchValue('')
    }
  }, [searchValue])

  // debounce search input
  useEffect(() => {
    const timer = setTimeout(() => onSearch(localSearchValue), 1000)

    return () => {
      clearTimeout(timer)
    }
  }, [localSearchValue])

  return { handleOnSearchChange, localSearchValue }
}
