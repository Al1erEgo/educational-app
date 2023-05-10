import { FC, useState } from 'react'

import {
  LearnCardSuccess,
  CardsConditionProvider,
  LearnCardAnswerWithRate,
  LearnCardQuestion,
} from '../../components'
import { StyledLearnCardButton, StyledLearnCard } from '../../styles'
import { LearnCardDataType, LearnHandlersType } from '../../types'

type LearnCardType = {
  card: LearnCardDataType
  cardHandlers: LearnHandlersType
}

export const LearnCard: FC<LearnCardType> = ({ card, cardHandlers }) => {
  const [showAnswer, setShowAnswer] = useState<boolean>(false)

  const { handleNextCard, handleNavigateToCards, setRate } = cardHandlers
  const { cardData, rate, isLoading, isSuccess, serverError } = card
  const { answer, shots, question } = cardData || {}

  const handleShowAnswer = () => setShowAnswer(true)

  const learnCardButtonName = showAnswer ? 'Next Card' : 'Show answer'
  const learnCardButtonHandler = showAnswer ? handleNextCard : handleShowAnswer

  if (isSuccess) return <LearnCardSuccess handleSuccess={handleNavigateToCards} />

  return (
    <StyledLearnCard>
      <CardsConditionProvider type="card" isLoading={isLoading} error={serverError}>
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
