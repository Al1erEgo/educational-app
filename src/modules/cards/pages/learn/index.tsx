import { FC } from 'react'

import { BackToCardsButton, LearnCard } from '@/modules/cards/components'
import { useLearnData } from '@/modules/cards/hooks'
import { StyledTitle } from '@/modules/cards/styles'

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
