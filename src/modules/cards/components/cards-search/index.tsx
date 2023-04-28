import React, { FC } from 'react'

import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'

import { SetSearchParamType } from '../../modules/cards-pack/hooks'
import { CardsSearchWrapper, StyledCardsText } from '../../styles'
import { CardsSearchWrapperProps } from '../../types'

import { useDebouncedSearchWithReset } from './hooks'

type CardsSearchProps = CardsSearchWrapperProps & {
  searchValue: string
  onSearch: SetSearchParamType
  placeholder: string
}
export const CardsSearch: FC<CardsSearchProps> = ({
  size = 'small',
  onSearch,
  searchValue,
  placeholder,
}) => {
  const { handleOnSearchChange, localSearchValue } = useDebouncedSearchWithReset(
    searchValue,
    onSearch
  )

  return (
    <CardsSearchWrapper size={size}>
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
    </CardsSearchWrapper>
  )
}
