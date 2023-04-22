import { useState } from 'react'

import { Loader } from '../../../../components'
import { useCardPacksQuery } from '../../api'
import { CardsHeader, PacksSearch } from '../../components'
import { StyledCardsTitleButton, StyledPacksContainer, StyledCardsToolbar } from '../../styles'

import { PacksButton, PacksFilter, PacksSlider, PacksTable } from './components'

export const Packs = () => {
  const [activeButton, setActiveButton] = useState('All')

  const { isLoading } = useCardPacksQuery({})

  /*  if (isLoading) {
    return <Loader isLoading={isLoading} />
  }*/

  return (
    <StyledPacksContainer>
      <CardsHeader title={'Packs list'}>
        <StyledCardsTitleButton loading={isLoading}>Add new pack</StyledCardsTitleButton>
      </CardsHeader>
      <Loader isLoading={isLoading}>
        <StyledCardsToolbar>
          <PacksSearch />
          <PacksButton activeButton={activeButton} setActiveButton={setActiveButton} />
          <PacksSlider />
          <PacksFilter />
        </StyledCardsToolbar>

        <PacksTable activeButton={activeButton} />
      </Loader>
    </StyledPacksContainer>
  )
}
