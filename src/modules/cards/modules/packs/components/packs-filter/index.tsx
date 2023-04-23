import React, { FC, useState } from 'react'

import { FilterOutlined } from '@ant-design/icons'

import { windowHeight } from '../../../../constants'

type PacksFilterProps = {
  setState: React.Dispatch<
    React.SetStateAction<{
      currentPage: number
      pageCount: number
      currentHeight: number
      sortPacks: string
      searchValue: string
    }>
  >
  clearFilters: () => void
}
export const PacksFilter: FC<PacksFilterProps> = ({ setState }) => {
  const [isFiltered, setIsFiltered] = useState(true)

  const clearFilters = () => {
    if (isFiltered) {
      setState({
        currentPage: 1,
        pageCount: 10,
        currentHeight: windowHeight,
        sortPacks: '',
        searchValue: '',
      })
    }
  }

  return <FilterOutlined onClick={clearFilters} />
}
