import { FC, PropsWithChildren } from 'react'

import { StyledPacksHeader, StyledTitle } from '../../styles'

type PacksHeaderProps = {
  title: string
}
export const CardsHeader: FC<PropsWithChildren<PacksHeaderProps>> = ({ title, children }) => {
  return (
    <StyledPacksHeader>
      <StyledTitle>{title}</StyledTitle>
      {children}
    </StyledPacksHeader>
  )
}
