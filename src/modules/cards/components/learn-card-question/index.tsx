import { FC } from 'react'

import { Typography } from 'antd'

const { Text } = Typography

type LearnCardQuestionType = {
  question?: string
  shots?: number
}

export const LearnCardQuestion: FC<LearnCardQuestionType> = ({ question, shots }) => {
  return (
    <>
      <div>
        <Text strong>Question: </Text>
        {question}
      </div>
      <Text type="secondary">Количество попыток ответа на вопрос: {shots}</Text>
    </>
  )
}
