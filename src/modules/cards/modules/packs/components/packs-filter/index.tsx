import React, { FC, useState } from 'react'

import { FilterOutlined } from '@ant-design/icons'

import { SetStateType } from '../../index'

type PacksFilterProps = {
  setState: SetStateType
  setSliderKey: (arg: (prevKey: number) => number) => void
}
export const PacksFilter: FC<PacksFilterProps> = ({ setState, setSliderKey }) => {
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
      }))
      setSliderKey(prevKey => prevKey + 1)
    }
  }

  return <FilterOutlined onClick={clearFilters} />
}

/*const clearFilters = () => {
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
}*/
