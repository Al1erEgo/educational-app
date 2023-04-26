import React, { FC, useEffect, useState } from 'react'

import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'

import { CardsSearchWrapperProps } from '../../../types'
import { SetStateType, StateType } from '../../modules/packs'
import { CardsSearchWrapper, StyledCardsText } from '../../styles'

type CardsSearchProps = Partial<CardsSearchWrapperProps> & {
  state: StateType
  setState: SetStateType
  isLoading: boolean
}
export const CardsSearch: FC<CardsSearchProps> = ({
  size = 'small',
  setState,
  state,
  isLoading,
}) => {
  const [searchValue, setSearchValue] = useState('')

  const handleSearch = (value: string) => {
    setState(prevState => ({ ...prevState, searchValue: value }))
  }

  useEffect(() => {
    if (!state.searchValue) {
      setSearchValue('')
    }
  }, [state.searchValue])

  return (
    <CardsSearchWrapper size={size}>
      <StyledCardsText>Search</StyledCardsText>
      <Input.Search
        placeholder="Enter pack name"
        enterButton={<SearchOutlined />}
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
        onSearch={handleSearch}
        allowClear={true}
        maxLength={50}
        loading={isLoading}
      />
    </CardsSearchWrapper>
  )
}
