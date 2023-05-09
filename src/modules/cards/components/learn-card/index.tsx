import { FC, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { MAIN_PATH } from '../../../../constants'
import { CardType } from '../../api'
import {
  LearnCardSuccess,
  CardsConditionProvider,
  LearnCardAnswerWithRate,
  LearnCardQuestion,
} from '../../components'
import { StyledLearnCardButton, StyledLearnCard } from '../../styles'

type LearnCardType = {
  error: unknown
  cardData: CardType | undefined
  isLoading: boolean
  isSuccess: boolean
  handleNextCard: () => void
  rate: number
  setRate: () => void
}

export const LearnCard: FC<LearnCardType> = ({
  error,
  cardData,
  isLoading,
  isSuccess,
  handleNextCard,
  rate,
  setRate,
}) => {
  const { answer, shots, question } = cardData || {}

  const [showAnswer, setShowAnswer] = useState<boolean>(false)

  const navigate = useNavigate()

  const handleShowAnswer = () => setShowAnswer(true)
  const handleNavigateToCards = () => navigate(MAIN_PATH.Cards)

  const learnCardButtonName = showAnswer ? 'Next Card' : 'Show answer'
  const learnCardButtonHandler = showAnswer ? handleNextCard : handleShowAnswer

  if (isSuccess) return <LearnCardSuccess handleSuccess={handleNavigateToCards} />

  return (
    <StyledLearnCard>
      <CardsConditionProvider type="card" isLoading={isLoading} error={error}>
        <LearnCardQuestion shots={shots} question={question} />
        <LearnCardAnswerWithRate
          answer={answer}
          isShow={showAnswer}
          rate={rate}
          setRate={setRate}
        />
        <StyledLearnCardButton onClick={learnCardButtonHandler}>
          {learnCardButtonName}
        </StyledLearnCardButton>
      </CardsConditionProvider>
    </StyledLearnCard>
  )
}
