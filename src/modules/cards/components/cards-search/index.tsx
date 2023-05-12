import React, { FC } from 'react'

import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'

import { useDebouncedSearchWithReset } from '../../hooks'
import { StyledCardsText } from '../../styles'
import { HandleSearchType } from '../../types'

import { CardsSearchWrapperProps, Style } from './style'

type CardsSearchProps = CardsSearchWrapperProps & {
  searchValue: string
  onSearch: HandleSearchType
  placeholder: string
}
export const CardsSearch: FC<CardsSearchProps> = ({
  size = 'small',
  onSearch,
  searchValue,
  placeholder,
}) => {
  const { handleOnSearchChange, localSearchValue } =
    useDebouncedSearchWithReset(searchValue, onSearch)

  return (
    <Style size={size}>
      <StyledCardsText>Search</StyledCardsText>
      <Input.Search
        placeholder={placeholder}
        enterButton={<SearchOutlined />}
        value={localSearchValue}
        onChange={handleOnSearchChange}
        onSearch={onSearch}
        allowClear={true}
        maxLength={50}
      />
    </Style>
  )
}
