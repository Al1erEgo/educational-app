import React, { FC, useEffect, useState } from 'react'

import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'

import { SetStateType, StateType } from '../../modules/packs'
import { CardsSearchWrapper, StyledCardsText } from '../../styles'
import { CardsSearchWrapperProps } from '../../types'

//TODO убрать any
type CardsSearchProps = Partial<CardsSearchWrapperProps> & {
  searchData: StateType | any
  onSearch: SetStateType | any
}
export const CardsSearch: FC<CardsSearchProps> = ({ size = 'small', onSearch, searchData }) => {
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
        placeholder="Enter pack name"
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
