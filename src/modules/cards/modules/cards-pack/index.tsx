import { useParams } from 'react-router-dom'

import { useAuthorised } from '../../../auth/hooks'
import { useCardsQuery } from '../../api'
import { CardsHeader, CardsSearch } from '../../components'
import { StyledCardsTitleButton, StyledCardsToolbar, StyledPacksContainer } from '../../styles'

import { PackTable } from './components'

export const CardsPack = () => {
  const { packId } = useParams()
  const { data: authData } = useAuthorised()
  const { data, isLoading } = useCardsQuery({ cardsPack_id: packId + '' })

  //TODO проверить работу условия, сейчас нет моих паков
  const titleButtonName = authData?._id === data?.packUserId ? 'Add new card' : 'Learn pack'

  return (
    <StyledPacksContainer>
      <CardsHeader title={'Pack'}>
        <StyledCardsTitleButton loading={isLoading}>{titleButtonName}</StyledCardsTitleButton>
      </CardsHeader>
      <StyledCardsToolbar>
        <CardsSearch />
      </StyledCardsToolbar>
      <PackTable data={data} />
    </StyledPacksContainer>
  )
}
