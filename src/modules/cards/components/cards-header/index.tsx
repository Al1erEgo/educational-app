import { FC, PropsWithChildren } from 'react'

import { Typography } from 'antd'

import { StyledPacksHeader } from '../../styles'

const { Title } = Typography

type PacksHeaderProps = {
  title: string
}
export const CardsHeader: FC<PropsWithChildren<PacksHeaderProps>> = ({ title, children }) => {
  return (
    <StyledPacksHeader>
      <Title level={2}>{title}</Title>
      {children}
    </StyledPacksHeader>
  )
}
