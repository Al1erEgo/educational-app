import { FC, useState } from 'react'
const { Text } = Typography

import { Skeleton, Typography } from 'antd'

import { CardType } from '../../api'
import { StyledLearnButton, StyledLearnCard } from '../../styles'

type LearnCardType = {
  cardData: CardType | undefined
  isLoading: boolean
}

export const LearnCard: FC<LearnCardType> = ({ cardData, isLoading }) => {
  const [showAnswer, setShowAnswer] = useState<boolean>(false)

  const handleShowAnswer = () => setShowAnswer(true)

  return (
    <Skeleton active loading={isLoading} rows={5}>
      <StyledLearnCard>
        <div>
          <Text strong>Question: </Text>
          {cardData?.question}
        </div>
        <Text type="secondary">Количество попыток ответа на вопрос: {cardData?.shots}</Text>
        {/*TODO Выделить в отдельную компоненту*/}
        {showAnswer ? (
          <Text disabled={!showAnswer}>{cardData?.answer}</Text>
        ) : (
          <StyledLearnButton onClick={handleShowAnswer}>Show answer</StyledLearnButton>
        )}
      </StyledLearnCard>
    </Skeleton>
  )
}
