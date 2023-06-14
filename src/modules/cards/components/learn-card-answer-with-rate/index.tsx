import { FC } from 'react'

import { Rate, Typography } from 'antd'

import { CardsTableContentCard } from '@/modules/cards/components'
import { StyledRateContainer } from '@/modules/cards/components/learn-card-answer-with-rate/styles'

const { Text } = Typography

type LearnCardAnswerWithRateProps = {
  answer?: string
  answerImg?: string
  isShow: boolean
  rate: number
  setRate: (value: number | ((prevState: number) => number)) => void
}

export const rateDescriptions = ['terrible', 'bad', 'normal', 'good', 'wonderful']

export const LearnCardAnswerWithRate: FC<LearnCardAnswerWithRateProps> = ({
  answer,
  answerImg,
  isShow,
  rate,
  setRate,
}) => {
  if (isShow)
    return (
      <>
        <CardsTableContentCard textContent={answer} imgContent={answerImg} />
        <StyledRateContainer>
          <Text strong>Rate yourself: </Text>
          <Rate tooltips={rateDescriptions} onChange={setRate} value={rate} />
        </StyledRateContainer>
      </>
    )

  return null
}
