import { CardType } from '../api'

import { TableErrorType } from './table-data'

export type LearnNames = {
  learnCardButtonName: string
  packName: string
}

export type LearnHandlersType = {
  learnCardButtonHandler: () => void
  handleNavigateToCards: () => void
  setRate: (value: ((prevState: number) => number) | number) => void
}

export type LearnCardDataType = {
  cardData?: CardType
  rate: number
  showAnswer: boolean
  isLoading: boolean
  isSuccess: boolean
  serverError: TableErrorType
}
