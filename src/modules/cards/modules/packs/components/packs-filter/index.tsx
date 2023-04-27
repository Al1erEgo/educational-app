import React, { FC } from 'react'

import { StyledClearFiltersButton } from '../../../../styles'

type PacksFilterProps = {
  clearFilters: () => void
}
export const PacksFilter: FC<PacksFilterProps> = ({ clearFilters }) => {
  return (
    <StyledClearFiltersButton type="text" onClick={clearFilters}>
      Clear Filters
    </StyledClearFiltersButton>
  )
}
