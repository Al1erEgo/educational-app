import { FC, PropsWithChildren } from 'react'

import { StyledTitle } from '../../styles'
import { StyledCardsHeaderChildrenWrapper } from '../cards-search/style'

import { StyledCardsHeader } from './styles'

type PacksHeaderProps = {
  title: string
}
export const CardsHeader: FC<PropsWithChildren<PacksHeaderProps>> = ({
  title,
  children,
}) => {
  return (
    <StyledCardsHeader>
      <StyledTitle>{title}</StyledTitle>
      <StyledCardsHeaderChildrenWrapper>
        {children}
      </StyledCardsHeaderChildrenWrapper>
    </StyledCardsHeader>
  )
}
