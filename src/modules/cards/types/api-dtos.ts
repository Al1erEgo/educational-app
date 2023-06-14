export type CardsPackType = {
  _id: string
  user_id: string
  name: string
  cardsCount: number
  created: string
  updated: string
  user_name: string
  private: boolean
  deckCover: string
}
export type CardPacksResponseType = {
  cardPacks: CardsPackType[]
  cardPacksTotalCount: number
  maxCardsCount: number
  minCardsCount: number
  page: number
  pageCount: number
}
export type CardPacksRequestType = {
  packName?: string
  min?: number
  max?: number
  sortPacks?: string
  page?: number
  pageCount?: number
  user_id?: string
  block?: boolean
}
export type NewCardPacksRequestType = {
  cardsPack: {
    name?: string
    deckCover?: string
    private?: boolean
  }
}
export type DeletedCardsPackRequestType = {
  id: string
}
export type UpdateCardsPackRequestType = {
  cardsPack: {
    _id: string
    name?: string
    private?: boolean
    deckCover?: string
  }
}
export type CardType = {
  question: string
  answer: string
  questionImg?: string
  answerImg?: string
  cardsPack_id: string
  grade: number
  shots: number
  user_id: string
  created: string
  updated: string
  _id: string
}
export type CardsResponseType = {
  cards: CardType[]
  cardsTotalCount: number
  maxGrade: number
  minGrade: number
  packCreated: string
  packDeckCover: string
  packName: string
  packPrivate: boolean
  packUpdated: string
  packUserId: string
  page: number
  pageCount: number
  token: string
  tokenDeathTime: number
}
export type CardsRequestType = {
  cardAnswer?: string
  cardQuestion?: string
  cardsPack_id: string
  min?: number
  max?: number
  sortCards?: string
  page?: number
  pageCount?: number
}
export type NewCardRequestType = {
  card: {
    cardsPack_id: string
    question?: string
    answer?: string
    grade?: number
    shots?: number
    answerImg?: string
    questionImg?: string
    questionVideo?: string
    answerVideo?: string
  }
}
export type DeleteCardRequestType = {
  id: string
}
export type UpdateCardRequestType = {
  card: {
    _id: string
    question?: string
    answer?: string
    grade?: number
    shots?: number
    answerImg?: string
    questionImg?: string
    questionVideo?: string
    answerVideo?: string
  }
}
export type UpdateCardGradeRequestType = {
  grade: number
  card_id: string
}
export type UpdateCardGradeResponseType = {
  _id: string
  cardsPack_id: string
  card_id: string
  user_id: string
  grade: number
  shots: number
}
