import styled from 'styled-components'

export type CardsSearchWrapperProps = {
  size?: 'big' | 'small'
}

export const Style = styled.div<CardsSearchWrapperProps>`
  width: ${props => (props.size === 'small' ? 35 : 100)}%;
`
