import { CardType } from '@/modules/cards/api'

type WiseSortingCardsType = (cards: CardType[]) => CardType[]

export const wiseSortingCards: WiseSortingCardsType = cards => {
  return [...cards].sort(
    (cardA, cardB) => cardA.shots / cardA.grade - cardB.shots / cardB.grade
  )
}
