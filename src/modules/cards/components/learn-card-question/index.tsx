import { FC } from 'react'

import { Typography } from 'antd'

import { CardsTableContentCard } from '@/modules/cards/components'

const { Text } = Typography

type LearnCardQuestionProps = {
  question?: string
  questionImg?: string
  shots?: number
}

export const LearnCardQuestion: FC<LearnCardQuestionProps> = ({ question, questionImg, shots }) => {
  return (
    <>
      <div>
        <Text strong>Question: </Text>
        <CardsTableContentCard textContent={question} imgContent={questionImg} />
      </div>
      <Text type="secondary">Количество попыток ответа на вопрос: {shots}</Text>
    </>
  )
}
