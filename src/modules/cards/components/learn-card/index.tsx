import { FC } from 'react'
const { Text } = Typography

import { Typography } from 'antd'

import { CardType } from '../../api'
import { StyledLearnButton, StyledLearnCard } from '../../styles'

type LearnCardType = {
  cardData: CardType | undefined
  loading: boolean
}

export const LearnCard: FC<LearnCardType> = ({ cardData, loading }) => {
  return (
    <StyledLearnCard>
      <div>
        <Text strong>Question: </Text>
        {cardData?.question}
      </div>
      <Text type="secondary">Количество попыток ответа на вопрос: {cardData?.shots}</Text>
      <StyledLearnButton>Show answer</StyledLearnButton>
    </StyledLearnCard>
  )
}
