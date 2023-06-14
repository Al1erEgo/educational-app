import { FC } from 'react'

import { Result } from 'antd'

import { StyledLearnCard, StyledLearnCardButton } from '@/modules/cards/styles'

type LearnCardSuccessProps = {
  handleSuccess: () => void
}

export const LearnCardSuccess: FC<LearnCardSuccessProps> = ({ handleSuccess }) => {
  return (
    <StyledLearnCard>
      <Result
        status="success"
        title="You successfully learned this pack!"
        extra={<StyledLearnCardButton onClick={handleSuccess}>Back to packs</StyledLearnCardButton>}
      />
    </StyledLearnCard>
  )
}
