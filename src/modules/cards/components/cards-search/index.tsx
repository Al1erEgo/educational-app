import { Dispatch, FC, useEffect, useState } from 'react'

import { Input } from 'antd'

import { CardsSearchWrapper, StyledCardsText } from '../../styles'
import { CardsSearchWrapperProps } from '../../types'

type CardsSearchType = Partial<CardsSearchWrapperProps> & {
  onSearch: Dispatch<string | undefined>
  delay?: number
  isLoading: boolean
}

export const CardsSearch: FC<CardsSearchType> = ({
  size = 'small',
  onSearch,
  delay = 1000,
  isLoading,
}) => {
  const [searchValue, setSearchValue] = useState<string>()

  useEffect(() => {
    const timer = setTimeout(() => onSearch(searchValue), delay)

    return () => {
      clearTimeout(timer)
    }
  }, [searchValue, delay])

  return (
    <CardsSearchWrapper size={size}>
      <StyledCardsText>Search</StyledCardsText>
      <Input.Search
        onChange={e => setSearchValue(e.target.value)}
        onSearch={onSearch}
        loading={isLoading}
      />
    </CardsSearchWrapper>
  )
}
