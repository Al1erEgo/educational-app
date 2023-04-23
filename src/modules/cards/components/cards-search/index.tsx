import React, { FC, useEffect, useState } from 'react'

import { Input } from 'antd'
import { useDebounce } from 'usehooks-ts'

import { CardsSearchWrapper, StyledCardsText } from '../../styles'

type CardsSearchProps = {
  setState: React.Dispatch<
    React.SetStateAction<{
      currentPage: number
      pageCount: number
      currentHeight: number
      sortPacks: string
      searchValue: string
      minCardsCount: number
      maxCardsCount: number
    }>
  >
}
export const CardsSearch: FC<CardsSearchProps> = ({ setState }) => {
  const [searchValue, setSearchValue] = useState('')

  const debouncedValue = useDebounce(searchValue, 500)

  useEffect(() => {
    handleSearch(debouncedValue)
  }, [debouncedValue])

  const handleSearch = (value: string) => {
    setState(prevState => ({ ...prevState, searchValue: value }))
  }

  return (
    <CardsSearchWrapper>
      <StyledCardsText>Search</StyledCardsText>
      <Input.Search
        placeholder="Search packs..."
        onSearch={handleSearch}
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
      />
    </CardsSearchWrapper>
  )
}
