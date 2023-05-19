import { FC } from 'react'

import { BackToCardsButton, LearnCard } from '../../components'
import { useLearnData } from '../../hooks'
import { StyledTitle } from '../../styles'

export const Learn: FC = () => {
  const [names, cardHandlers, card] = useLearnData()

  return (
    <>
      <BackToCardsButton />
      <StyledTitle>{names.packName}</StyledTitle>
      <LearnCard card={card} cardHandlers={cardHandlers} names={names} />
    </>
  )
}
