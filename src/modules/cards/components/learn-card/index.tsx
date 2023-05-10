import { FC, useState } from 'react'

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
  cardData?: CardType
  isLoading: boolean
  isSuccess: boolean
  handleNextCard: () => void
  handleSuccess: () => void
  rate: number
  setRate: () => void
}

export const LearnCard: FC<LearnCardType> = ({
  error,
  cardData,
  isLoading,
  isSuccess,
  handleNextCard,
  handleSuccess,
  rate,
  setRate,
}) => {
  const { answer, shots, question } = cardData || {}

  const [showAnswer, setShowAnswer] = useState<boolean>(false)

  const handleShowAnswer = () => setShowAnswer(true)

  const learnCardButtonName = showAnswer ? 'Next Card' : 'Show answer'
  const learnCardButtonHandler = showAnswer ? handleNextCard : handleShowAnswer

  if (isSuccess) return <LearnCardSuccess handleSuccess={handleSuccess} />

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
