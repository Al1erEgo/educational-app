import React, { FC } from 'react'

import { HandleClearFiltersType } from '../../types'

import { StyledClearFiltersButton } from './styles'

type PacksFilterProps = {
  clearFilters: HandleClearFiltersType
}
export const PacksFilter: FC<PacksFilterProps> = ({ clearFilters }) => {
  return (
    <StyledClearFiltersButton type="text" onClick={clearFilters}>
      Clear Filters
    </StyledClearFiltersButton>
  )
}
