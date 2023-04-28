import React, { FC, useEffect, useState } from 'react'

import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'

import { SetStateType, StateType } from '../../modules/packs'
import { CardsSearchWrapper, StyledCardsText } from '../../styles'
import { CardsSearchWrapperProps } from '../../types'

//TODO убрать any
type CardsSearchProps = CardsSearchWrapperProps & {
  searchData: StateType | any
  onSearch: SetStateType | any
  placeholder: string
}
export const CardsSearch: FC<CardsSearchProps> = ({
  size = 'small',
  onSearch,
  searchData,
  placeholder,
}) => {
  const [searchValue, setSearchValue] = useState<string>('')

  useEffect(() => {
    if (!searchData) {
      setSearchValue('')
    }
  }, [searchData])

  useEffect(() => {
    const timer = setTimeout(() => onSearch(searchValue), 1000)

    return () => {
      clearTimeout(timer)
    }
  }, [searchValue])

  return (
    <CardsSearchWrapper size={size}>
      <StyledCardsText>Search</StyledCardsText>
      <Input.Search
        placeholder={placeholder}
        enterButton={<SearchOutlined />}
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
        onSearch={onSearch}
        allowClear={true}
        maxLength={50}
      />
    </CardsSearchWrapper>
  )
}
