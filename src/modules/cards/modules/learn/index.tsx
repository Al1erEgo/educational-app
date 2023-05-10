import { FC } from 'react'

import { BackToCardsButton, LearnCard } from '../../components'
import { StyledTitle } from '../../styles'

import { useLearnData } from './hooks'

export const Learn: FC = () => {
  const [packName, cardHandlers, card] = useLearnData()

  return (
    <>
      <BackToCardsButton />
      <StyledTitle>{packName}</StyledTitle>
      <LearnCard card={card} cardHandlers={cardHandlers} />
    </>
  )
}
