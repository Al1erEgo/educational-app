import React, { FC } from 'react'

import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'

import { CardsSearchWrapperProps, StyledCardsSearchWrapper } from './style'

import { useDebouncedSearchWithReset } from '@/modules/cards/hooks'
import { StyledCardsText } from '@/modules/cards/styles'
import { HandleSearchType } from '@/modules/cards/types'

type CardsSearchProps = CardsSearchWrapperProps & {
  searchValue: string
  onSearch: HandleSearchType
  placeholder: string
  disabled?: boolean
}
export const CardsSearch: FC<CardsSearchProps> = ({
  size = 'small',
  onSearch,
  searchValue,
  placeholder,
  disabled,
}) => {
  const { handleOnSearchChange, localSearchValue } =
    useDebouncedSearchWithReset(searchValue, onSearch)

  return (
    <StyledCardsSearchWrapper size={size}>
      <StyledCardsText>Search</StyledCardsText>
      <Input.Search
        disabled={disabled}
        placeholder={placeholder}
        enterButton={<SearchOutlined />}
        value={localSearchValue}
        onChange={handleOnSearchChange}
        onSearch={onSearch}
        allowClear={true}
        maxLength={50}
      />
    </StyledCardsSearchWrapper>
  )
}
