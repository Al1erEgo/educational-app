import { FC } from 'react'

import { Result } from 'antd'

import { StyledLearnCard, StyledLearnCardButton } from '../../styles'

type LearnCardSuccessType = {
  handleSuccess: () => void
}

export const LearnCardSuccess: FC<LearnCardSuccessType> = ({
  handleSuccess,
}) => {
  return (
    <StyledLearnCard>
      <Result
        status="success"
        title="You successfully learned this pack!"
        extra={
          <StyledLearnCardButton onClick={handleSuccess}>
            Back to packs
          </StyledLearnCardButton>
        }
      />
    </StyledLearnCard>
  )
}
