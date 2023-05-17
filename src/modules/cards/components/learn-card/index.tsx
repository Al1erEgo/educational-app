import { FC } from 'react'

import {
  CardsConditionProvider,
  LearnCardAnswerWithRate,
  LearnCardQuestion,
  LearnCardSuccess,
} from '../../components'
import { StyledLearnCard, StyledLearnCardButton } from '../../styles'
import { LearnCardDataType, LearnHandlersType, LearnNames } from '../../types'

type LearnCardType = {
  card: LearnCardDataType
  cardHandlers: LearnHandlersType
  names: LearnNames
}

export const LearnCard: FC<LearnCardType> = ({ card, cardHandlers, names }) => {
  const { learnCardButtonHandler, handleNavigateToCards, setRate } =
    cardHandlers
  const { cardData, rate, showAnswer, isLoading, isSuccess, serverError } = card
  const { learnCardButtonName } = names
  const { answer, shots, question } = cardData || {}

  if (isSuccess)
    return <LearnCardSuccess handleSuccess={handleNavigateToCards} />

  return (
    <StyledLearnCard>
      <CardsConditionProvider
        type="card"
        isLoading={isLoading}
        error={serverError}
      >
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