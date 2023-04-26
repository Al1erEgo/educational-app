import React, { FC, useEffect, useState } from 'react'

import { SearchOutlined, CloseOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import { useDebounce } from 'usehooks-ts'

import { SetStateType, StateType } from '../../modules/packs'
import { CardsSearchWrapper, StyledCardsText } from '../../styles'

type CardsSearchProps = {
  state: StateType
  setState: SetStateType
}
export const CardsSearch: FC<CardsSearchProps> = ({ setState, state }) => {
  const [searchValue, setSearchValue] = useState('')

  const debouncedValue = useDebounce(searchValue, 500)

  useEffect(() => {
    handleSearch(debouncedValue)
  }, [debouncedValue])

  const handleSearch = (value: string) => {
    setState(prevState => ({ ...prevState, searchValue: value }))
  }

  const handleClearSearch = () => {
    setSearchValue('')
    setState(prevState => ({ ...prevState, searchValue: '' }))
  }

  useEffect(() => {
    if (!state.searchValue) {
      setSearchValue('')
    }
  }, [state.searchValue])

  return (
    <CardsSearchWrapper>
      <StyledCardsText>Search</StyledCardsText>
      <Input.Search
        placeholder="Search packs..."
        enterButton={<SearchOutlined />}
        suffix={<CloseOutlined onClick={handleClearSearch} />}
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
        onSearch={handleSearch}
      />
    </CardsSearchWrapper>
  )
}
