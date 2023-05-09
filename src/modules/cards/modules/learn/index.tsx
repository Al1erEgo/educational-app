import { FC, useEffect, useState } from 'react'

import { useParams, useSearchParams } from 'react-router-dom'

import {
  CardType,
  UpdateCardGradeRequestType,
  useCardsPackQuery,
  useUpdateCardGradeMutation,
} from '../../api'
import { BackToCardsButton, LearnCard } from '../../components'
import { StyledTitle } from '../../styles'

import { wiseSortingCards } from './utils'

export const Learn: FC = () => {
  const { packId = '' } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()
  const packName = searchParams.get('name') || ''

  const [currentCard, setCurrentCard] = useState<number>(0)
  const [sortedCards, setSortedCards] = useState<CardType[] | undefined>()

  const {
    data,
    isLoading: isPackLoading,
    error: packLoadingError,
  } = useCardsPackQuery(
    {
      cardsPack_id: packId + '',
      pageCount: 200,
    },
    { skip: !!sortedCards }
  )

  const [updateGrade, { isLoading: isUpdateGradeLoading, error: updateGradeError }] =
    useUpdateCardGradeMutation()

  const handleLearnCard = (newGradeData: UpdateCardGradeRequestType) => {
    updateGrade(newGradeData)
    setCurrentCard(currentCard + 1)
  }

  useEffect(() => {
    if (data) {
      setSortedCards(wiseSortingCards(data.cards))
    }
  }, [data])

  return (
    <>
      <BackToCardsButton />
      <StyledTitle>{packName}</StyledTitle>
      <LearnCard
        cardData={sortedCards && sortedCards[currentCard]}
        isLoading={isPackLoading || isUpdateGradeLoading || !sortedCards}
        handleLearnCard={handleLearnCard}
        isSuccess={currentCard === sortedCards?.length}
      />
    </>
  )
}
