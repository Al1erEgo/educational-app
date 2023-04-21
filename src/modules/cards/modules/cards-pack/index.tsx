import { useParams } from 'react-router-dom'

import { useCardsQuery } from '../../api'
import { CardsHeader } from '../../components'
import { StyledPacksContainer } from '../../styles'

export const CardsPack = () => {
  const { packId } = useParams()
  const { data, isLoading } = useCardsQuery({ cardsPack_id: packId + '' })

  console.log(data)

  return (
    <StyledPacksContainer>
      <CardsHeader title={'Pack'} />
    </StyledPacksContainer>
  )
}
