import { FC, useEffect, useState } from 'react'

import { useNavigate, useParams, useSearchParams } from 'react-router-dom'

import { MAIN_PATH } from '../../../../constants'
import { CardType, useCardsPackQuery, useUpdateCardGradeMutation } from '../../api'
import { BackToCardsButton, LearnCard } from '../../components'
import { StyledTitle } from '../../styles'

import { wiseSortingCards } from './utils'

export const Learn: FC = () => {
  const navigate = useNavigate()
  const { packId = '' } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()
  const packName = searchParams.get('name') || ''

  const [currentCard, setCurrentCard] = useState<number>(0)
  const [sortedCards, setSortedCards] = useState<CardType[] | undefined>()
  const [rate, setRate] = useState(3)

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

  const handleNextCard = () => {
    updateGrade({ grade: rate, card_id: _id })
    setCurrentCard(currentCard + 1)
    setRate(3)
  }
  const handleNavigateToCards = () => navigate(MAIN_PATH.Cards)

  const cardData = sortedCards && sortedCards[currentCard]
  const isLoading = isPackLoading || isUpdateGradeLoading || !sortedCards
  const isSuccess = currentCard === sortedCards?.length
  const error = packLoadingError || updateGradeError

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
        error={error}
        cardData={cardData}
        isLoading={isLoading}
        isSuccess={isSuccess}
        handleNextCard={handleNextCard}
        handleSuccess={handleNavigateToCards}
        rate={rate}
        setRate={setRate}
      />
    </>
  )
}
