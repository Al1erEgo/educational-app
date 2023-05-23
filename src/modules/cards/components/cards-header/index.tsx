import { FC, PropsWithChildren } from 'react'

import { StyledTitle } from '../../styles'
import { PackTableContentCard } from '../pack-table-content-card'

import {
  StyledCardsHeaderInfoWrapper,
  StyledCardsHeaderWrapper,
} from './styles'

type PacksHeaderProps = {
  title: string
  image?: string
}
export const CardsHeader: FC<PropsWithChildren<PacksHeaderProps>> = ({
  title,
  image,
  children,
}) => {
  return (
    <StyledCardsHeaderWrapper>
      <StyledCardsHeaderInfoWrapper>
        <StyledTitle>{title}</StyledTitle>
        <PackTableContentCard imgContent={image} />
      </StyledCardsHeaderInfoWrapper>
      {children}
    </StyledCardsHeaderWrapper>
  )
}
