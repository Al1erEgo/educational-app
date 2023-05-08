import { FC, useEffect, useState } from 'react'

import { useParams, useSearchParams } from 'react-router-dom'

import { CardType, useCardsPackQuery } from '../../api'
import { BackToCardsButton, LearnCard } from '../../components'
import { StyledTitle } from '../../styles'

import { wiseSortingCards } from './utils'

export const Learn: FC = () => {
  const { packId = '' } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()
  const packName = searchParams.get('name') || ''
  const [currentCard, setCurrentCard] = useState<number | undefined>()
  const [sortedCards, setSortedCards] = useState<CardType[] | undefined>()
  const { data, isLoading, error } = useCardsPackQuery({
    cardsPack_id: packId + '',
    pageCount: 200,
  })

  useEffect(() => {
    if (data) {
      setSortedCards(wiseSortingCards(data.cards))
      setCurrentCard(0)
    }
  }, [data])

  return (
    <>
      <BackToCardsButton />
      <StyledTitle>{packName}</StyledTitle>
      <LearnCard
        cardData={sortedCards && sortedCards[currentCard]}
        isLoading={isLoading || !sortedCards}
      />
    </>
  )
}
