import { useState } from 'react'

import { Loader } from '../../../../components'
import { useCardPacksQuery } from '../../api'
import { StyledPacksContainer, StyledPacksToolbar } from '../../styles'

import {
  PacksButton,
  PacksFilter,
  PacksHeader,
  PacksSearch,
  PacksSlider,
  PacksTable,
} from './components'

export const Packs = () => {
  const [activeButton, setActiveButton] = useState('All')

  const { isLoading } = useCardPacksQuery({})

  return (
    <StyledPacksContainer>
      <PacksHeader isLoading={isLoading} />
      <Loader isLoading={isLoading}>
        <StyledPacksToolbar>
          <PacksSearch />
          <PacksButton activeButton={activeButton} setActiveButton={setActiveButton} />
          <PacksSlider />
          <PacksFilter />
        </StyledPacksToolbar>

        <PacksTable activeButton={activeButton} />
      </Loader>
    </StyledPacksContainer>
  )
}
