import { FC } from 'react'

import { Typography } from 'antd'

import { CardsContentCard } from '../cards-content-card'

const { Text } = Typography

type LearnCardQuestionType = {
  question?: string
  questionImg?: string
  shots?: number
}

export const LearnCardQuestion: FC<LearnCardQuestionType> = ({
  question,
  questionImg,
  shots,
}) => {
  return (
    <>
      <div>
        <Text strong>Question: </Text>
        <CardsContentCard textContent={question} imgContent={questionImg} />
      </div>
      <Text type="secondary">Количество попыток ответа на вопрос: {shots}</Text>
    </>
  )
}
