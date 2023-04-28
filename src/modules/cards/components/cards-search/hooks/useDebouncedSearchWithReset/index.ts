import { ChangeEventHandler, useEffect, useState } from 'react'

import { SetSearchParamType } from '../../../../modules/cards-pack/hooks'

type HandleOnSearchChangeType = ChangeEventHandler<HTMLInputElement>

type UseDebouncedSearchWithResetType = (
  searchValue: string,
  onSearch: SetSearchParamType
) => { handleOnSearchChange: HandleOnSearchChangeType; localSearchValue: string }

export const useDebouncedSearchWithReset: UseDebouncedSearchWithResetType = (
  searchValue,
  onSearch
) => {
  const [localSearchValue, setLocalSearchValue] = useState<string>('')

  const handleOnSearchChange: HandleOnSearchChangeType = e => setLocalSearchValue(e.target.value)

  useEffect(() => {
    if (!searchValue) {
      setLocalSearchValue('')
    }
  }, [searchValue])

  useEffect(() => {
    const timer = setTimeout(() => onSearch(localSearchValue), 1000)

    return () => {
      clearTimeout(timer)
    }
  }, [localSearchValue])

  return { handleOnSearchChange, localSearchValue }
}
