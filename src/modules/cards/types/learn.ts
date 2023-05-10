import { CardType } from '../api'

export type LearnHandlersType = {
  [key: string]: () => void
}

export type LearnCardDataType = {
  cardData?: CardType
  rate: number
  isLoading: boolean
  isSuccess: boolean
  error: unknown
}
