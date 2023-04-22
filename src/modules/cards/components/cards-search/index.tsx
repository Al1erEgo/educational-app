import { FC } from 'react'

import { Input } from 'antd'

import { CardsSearchWrapper, StyledCardsText } from '../../styles'

type CardsSearchType = {
  handleSearch: (value: any) => void
  searchValue: any
  setSearchValue: (e: any) => void
}

export const CardsSearch: FC<CardsSearchType> = ({ handleSearch, searchValue, setSearchValue }) => {
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
