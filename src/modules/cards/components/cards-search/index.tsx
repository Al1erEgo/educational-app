import React, { FC, useEffect, useState } from 'react'

import { SearchOutlined } from '@ant-design/icons'
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

  const debouncedValue = useDebounce(searchValue, 1000)

  /*
  useEffect(() => {
    handleSearch(debouncedValue)
  }, [debouncedValue])
*/

  /*  const handleSearch = (value: string) => {
    setState(prevState => ({ ...prevState, searchValue: value }))
  }*/

  /*  useEffect(() => {
    if (!state.searchValue) {
      setSearchValue('')
    }
  }, [state.searchValue])*/

  return (
    <CardsSearchWrapper>
      <StyledCardsText>Search</StyledCardsText>
      <Input.Search
        placeholder="Enter pack name"
        enterButton={<SearchOutlined />}
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
        /* onSearch={handleSearch}*/
        allowClear={true}
        maxLength={50}
      />
    </CardsSearchWrapper>
  )
}
