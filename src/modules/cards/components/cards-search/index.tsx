import { useEffect, useState } from 'react'

import { Input } from 'antd'
import { useDebounce } from 'usehooks-ts'

import { CardsSearchWrapper, StyledCardsText } from '../../styles'

export const CardsSearch = ({ onSearch }: { onSearch: (value: string) => void }) => {
  const [searchValue, setSearchValue] = useState('')

  const debouncedValue = useDebounce(searchValue, 500)

  useEffect(() => {
    onSearch(debouncedValue)
  }, [debouncedValue, onSearch])

  const handleSearch = (value: string) => {
    setSearchValue(value)
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
