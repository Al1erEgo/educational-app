import React, { FC } from 'react'

import { StyledClearFiltersButton } from '@/modules/cards/components/packs-filter/styles'
import { HandleClearFiltersType } from '@/modules/cards/types'

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
