import React, { FC, useState } from 'react'

import { FilterOutlined } from '@ant-design/icons'

import { SetStateType } from '../../index'

type PacksFilterProps = {
  setState: SetStateType
}
export const PacksFilter: FC<PacksFilterProps> = ({ setState }) => {
  const [isFiltered, setIsFiltered] = useState(true)

  const clearFilters = () => {
    if (isFiltered) {
      setState(prevState => ({
        ...prevState,
        currentPage: 1,
        pageCount: 10,
        sortPacks: '',
        searchValue: '',
        minCardsCount: 0,
        maxCardsCount: 110,
        sliderKey: prevState.sliderKey + 1,
      }))
    }
  }

  return <FilterOutlined onClick={clearFilters} />
}
