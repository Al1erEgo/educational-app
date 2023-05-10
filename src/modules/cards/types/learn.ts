import { CardType } from '../api'

import { TableErrorType } from './table-data'

export type LearnHandlersType = {
  handleNextCard: () => void
  handleNavigateToCards: () => void
  setRate: (value: ((prevState: number) => number) | number) => void
}

export type LearnCardDataType = {
  cardData?: CardType
  rate: number
  isLoading: boolean
  isSuccess: boolean
  serverError: TableErrorType
}
