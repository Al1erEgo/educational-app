import { FC } from 'react'

import { Rate, Typography } from 'antd'

import { rateDescriptions } from '../../constants'
import { CardsContentCard } from '../cards-content-card'

import { StyledRateContainer } from './styles'

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
        <CardsContentCard textContent={answer} imgContent={answerImg} />
        <StyledRateContainer>
          <Text strong>Rate yourself: </Text>
          <Rate tooltips={rateDescriptions} onChange={setRate} value={rate} />
        </StyledRateContainer>
      </>
    )

  return null
}
