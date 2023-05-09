import { FC, useState } from 'react'

import { Result, Skeleton } from 'antd'
import { useNavigate } from 'react-router-dom'

import { MAIN_PATH } from '../../../../constants'
import { CardType, UpdateCardGradeRequestType } from '../../api'
import { StyledLearnButton, StyledLearnCard } from '../../styles'
import { LearnCardAnswerWithRate } from '../learn-card-answer-with-rate'
import { LearnCardQuestion } from '../learn-card-question'

type LearnCardType = {
  cardData: CardType | undefined
  isLoading: boolean
  handleLearnCard: (newGradeData: UpdateCardGradeRequestType) => void
  isSuccess: boolean
}

export const LearnCard: FC<LearnCardType> = ({
  cardData,
  isLoading,
  handleLearnCard,
  isSuccess,
}) => {
  const { answer, _id, shots, question } = cardData || {}

  const [rate, setRate] = useState(3)
  const [showAnswer, setShowAnswer] = useState<boolean>(false)

  const navigate = useNavigate()

  const handleShowAnswer = () => setShowAnswer(true)
  const handleNextCard = () => {
    handleLearnCard({ grade: rate, card_id: _id })
    setRate(3)
  }
  const handleNavigateToCards = () => navigate(MAIN_PATH.Cards)

  const styledLearnButtonName = showAnswer ? 'Next Card' : 'Show answer'
  const styledLearnButtonHandler = showAnswer ? handleNextCard : handleShowAnswer

  if (isSuccess)
    return (
      <StyledLearnCard>
        <Result
          status="success"
          title="You successfully learned this pack!!!"
          extra={
            <StyledLearnButton onClick={handleNavigateToCards}>Back to packs</StyledLearnButton>
          }
        />
      </StyledLearnCard>
    )

  return (
    <Skeleton active loading={isLoading} rows={5}>
      <StyledLearnCard>
        <LearnCardQuestion shots={shots} question={question} />
        <LearnCardAnswerWithRate
          answer={answer}
          isShow={showAnswer}
          rate={rate}
          setRate={setRate}
        />
        <StyledLearnButton onClick={styledLearnButtonHandler}>
          {styledLearnButtonName}
        </StyledLearnButton>
      </StyledLearnCard>
    </Skeleton>
  )
}
