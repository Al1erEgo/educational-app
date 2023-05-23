import styled from 'styled-components'

export type CardsSearchWrapperProps = {
  size?: 'big' | 'small'
}

export const StyledCardsSearchWrapper = styled.div<CardsSearchWrapperProps>`
  width: ${props => (props.size === 'small' ? 35 : 100)}%;
`

export const StyledCardsHeaderChildrenWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-left: 2rem;
`
