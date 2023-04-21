import { useState } from 'react'

import { Loader } from '../../../../components'
import { useCardPacksQuery } from '../../api'
import { CardsHeader } from '../../components'
import {
  StyledCardsTitleButton,
  StyledPacksContainer,
  StyledPacksTitleButton,
  StyledPacksToolbar,
} from '../../styles'

import { PacksButton, PacksFilter, PacksSearch, PacksSlider, PacksTable } from './components'

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
