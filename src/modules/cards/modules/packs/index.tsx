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

  const { data, isLoading, isError } = useCardPacksQuery({})

  console.log('data', data)

  if (isLoading) {
    return <Loader isLoading={isLoading} />
  }

  if (isError) {
    return <div>Error fetching data</div>
  }

  return (
    <StyledPacksContainer>
      <PacksHeader isLoading={isLoading} />

      <StyledPacksToolbar>
        <PacksSearch />
        <PacksButton activeButton={activeButton} setActiveButton={setActiveButton} />
        <PacksSlider />
        <PacksFilter />
      </StyledPacksToolbar>

      <PacksTable activeButton={activeButton} />
    </StyledPacksContainer>
  )
}
