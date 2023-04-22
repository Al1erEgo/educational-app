import { Input } from 'antd'

import { CardsSearchWrapper, StyledCardsText } from '../../styles'
export const CardsSearch = () => {
  return (
    <CardsSearchWrapper>
      <StyledCardsText>Search</StyledCardsText>
      <Input.Search />
    </CardsSearchWrapper>
  )
}
