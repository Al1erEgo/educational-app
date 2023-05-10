import { useEffect, useState } from 'react'

import { useNavigate, useParams, useSearchParams } from 'react-router-dom'

import { MAIN_PATH } from '../../../../../constants'
import { CardType, useCardsPackQuery, useUpdateCardGradeMutation } from '../../../api'
import { LearnCardDataType, LearnHandlersType } from '../../../types'
import { wiseSortingCards } from '../utils'

type UseLearnDataType = () => [
  packName: string,
  cardHandlers: LearnHandlersType,
  card: LearnCardDataType
]

export const useLearnData: UseLearnDataType = () => {
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
  const serverError = packLoadingError || updateGradeError

  useEffect(() => {
    if (data) {
      setSortedCards(wiseSortingCards(data.cards))
    }
  }, [data])

  return [
    packName,
    { handleNextCard, handleNavigateToCards, setRate },
    { cardData, rate, isLoading, isSuccess, serverError },
  ]
}
