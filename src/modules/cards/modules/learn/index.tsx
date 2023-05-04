import { FC } from 'react'

import { useParams } from 'react-router-dom'

import { useCardsPackQuery } from '../../api'
import { BackToCardsButton } from '../../components/back-to-cards-button'

export const Learn: FC = () => {
  const { packId = '' } = useParams()
  const { data, isLoading, error } = useCardsPackQuery({
    cardsPack_id: packId + '',
    pageCount: 200,
  })

  return <BackToCardsButton />
}
