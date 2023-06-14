import { CardType } from '@/modules/cards/types'

type WiseSortingCardsType = (cards: CardType[]) => CardType[]

export const wiseSortingCards: WiseSortingCardsType = cards => {
  return [...cards].sort((cardA, cardB) => cardB.shots / cardB.grade - cardA.shots / cardA.grade)
}
