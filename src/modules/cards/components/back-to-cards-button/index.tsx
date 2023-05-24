import { StyledArrowImg, StyledBackToCardLink } from './styles'

import arrowBack from '@/assets/arrow-back.svg'
import { MAIN_PATH } from '@/constants'

export const BackToCardsButton = () => {
  return (
    <StyledBackToCardLink to={MAIN_PATH.Cards}>
      <StyledArrowImg src={arrowBack} alt="arrow-back" />
      Go to Packs List
    </StyledBackToCardLink>
  )
}
