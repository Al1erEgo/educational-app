import { Input } from 'antd'

import { CardsSearchWrapper, StyledCardsText } from '../../styles'
export const PacksSearch = () => {
  return (
    <CardsSearchWrapper>
      <StyledCardsText>Search</StyledCardsText>
      <Input.Search />
    </CardsSearchWrapper>
  )
}
