import { FC } from 'react'

import { Rate, Typography } from 'antd'

import { PackTableContentCard } from '@/modules/cards/components'
import { StyledRateContainer } from '@/modules/cards/components/learn-card-answer-with-rate/styles'
import { rateDescriptions } from '@/modules/cards/constants'

const { Text } = Typography

type LearnCardAnswerWithRateType = {
  answer?: string
  answerImg?: string
  isShow: boolean
  rate: number
  setRate: (value: number | ((prevState: number) => number)) => void
}

export const LearnCardAnswerWithRate: FC<LearnCardAnswerWithRateType> = ({
  answer,
  answerImg,
  isShow,
  rate,
  setRate,
}) => {
  if (isShow)
    return (
      <>
        <PackTableContentCard textContent={answer} imgContent={answerImg} />
        <StyledRateContainer>
          <Text strong>Rate yourself: </Text>
          <Rate tooltips={rateDescriptions} onChange={setRate} value={rate} />
        </StyledRateContainer>
      </>
    )

  return null
}
