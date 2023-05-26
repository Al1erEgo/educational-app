import { useEffect, useState } from 'react'

import { useNavigate, useParams, useSearchParams } from 'react-router-dom'

import { MAIN_PATH } from '@/constants'
import {
  CardType,
  useCardsPackQuery,
  useUpdateCardGradeMutation,
} from '@/modules/cards/api'
import {
  LearnCardDataType,
  LearnHandlersType,
  LearnNames,
} from '@/modules/cards/types'
import { wiseSortingCards } from '@/modules/cards/utils'

export type UseLearnDataType = () => [
  LearnNames,
  LearnHandlersType,
  LearnCardDataType
]

export const useLearnData: UseLearnDataType = () => {
  const navigate = useNavigate()
  const { packId = '' } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()
  const packName = searchParams.get('name') || ''

  const [currentCard, setCurrentCard] = useState<number>(0)
  const [sortedCards, setSortedCards] = useState<CardType[] | undefined>()
  const [rate, setRate] = useState(3)
  const [showAnswer, setShowAnswer] = useState<boolean>(false)

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

  const [
    updateGrade,
    { isLoading: isUpdateGradeLoading, error: updateGradeError },
  ] = useUpdateCardGradeMutation()

  const cardData = sortedCards && sortedCards[currentCard]
  const isLoading = isPackLoading || isUpdateGradeLoading || !sortedCards
  const isSuccess = currentCard === sortedCards?.length
  const serverError = packLoadingError || updateGradeError

  const handleNextCard = () => {
    if (cardData) {
      updateGrade({ grade: rate, card_id: cardData._id })
      setCurrentCard(currentCard + 1)
      setRate(3)
      setShowAnswer(false)
    }
  }
  const handleShowAnswer = () => setShowAnswer(true)
  const handleNavigateToCards = () => navigate(MAIN_PATH.Cards)

  const learnCardButtonName = showAnswer ? 'Next Card' : 'Show answer'
  const learnCardButtonHandler = showAnswer ? handleNextCard : handleShowAnswer

  useEffect(() => {
    if (data) {
      setSortedCards(wiseSortingCards(data.cards))
    }
  }, [data])

  return [
    { learnCardButtonName, packName },
    { learnCardButtonHandler, handleNavigateToCards, setRate },
    { cardData, rate, showAnswer, isLoading, isSuccess, serverError },
  ]
}
