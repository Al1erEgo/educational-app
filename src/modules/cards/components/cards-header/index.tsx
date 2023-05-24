import { FC, PropsWithChildren } from 'react'

import {
  StyledCardsHeaderInfoWrapper,
  StyledCardsHeaderWrapper,
} from './styles'

import { PackTableContentCard } from '@/modules/cards/components'
import { StyledTitle } from '@/modules/cards/styles'

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
