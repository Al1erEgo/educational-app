import { CardType } from '../../../api'

type WiseSortingCardsType = (cards: CardType[]) => CardType[]

export const wiseSortingCards: WiseSortingCardsType = cards => {
  const sortedCards = cards
    .map(card => ({ ...card, priority: card.shots / card.grade }))
    .sort((cardA, cardB) => cardA.priority - cardB.priority)

  sortedCards.forEach(card => {
    delete card.priority
  })

  return sortedCards
}
