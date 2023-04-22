import { FC } from 'react'

import { Input } from 'antd'

import { CardsSearchWrapperProps } from '../../../types'
import { CardsSearchWrapper, StyledCardsText } from '../../styles'

type CardsSearchType = Partial<CardsSearchWrapperProps>

export const CardsSearch: FC<CardsSearchType> = ({ size = 'small' }) => {
  return (
    <CardsSearchWrapper size={size}>
      <StyledCardsText>Search</StyledCardsText>
      <Input.Search />
    </CardsSearchWrapper>
  )
}
