import { FC, useState } from 'react'

import { useParams, useSearchParams } from 'react-router-dom'

import { useCardsPackQuery } from '../../api'
import { BackToCardsButton, LearnCard } from '../../components'
import { StyledTitle } from '../../styles'

export const Learn: FC = () => {
  const { packId = '' } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()
  const packName = searchParams.get('name') || ''
  const [currentCard, setCurrentCard] = useState<number>(0)
  const { data, isLoading, error } = useCardsPackQuery({
    cardsPack_id: packId + '',
    pageCount: 200,
  })

  return (
    <>
      <BackToCardsButton />
      <StyledTitle>{packName}</StyledTitle>
      <LearnCard cardData={data?.cards[currentCard]} loading={isLoading} />
    </>
  )
}
