import { FC } from 'react'

import { Typography } from 'antd'

import { StyledPacksHeader, StyledPacksTitleButton } from '../../../../styles'

const { Title } = Typography

type PacksHeaderProps = {
  isLoading: boolean
}
export const PacksHeader: FC<PacksHeaderProps> = ({ isLoading }) => {
  return (
    <StyledPacksHeader>
      <Title level={2}>Packs list</Title>
      <StyledPacksTitleButton type="primary" htmlType="submit" size="large" loading={isLoading}>
        Add new pack
      </StyledPacksTitleButton>
    </StyledPacksHeader>
  )
}
