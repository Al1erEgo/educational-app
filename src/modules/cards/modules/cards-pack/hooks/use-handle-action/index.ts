import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/query'

import { DeleteCardRequestType, NewCardRequestType, UpdateCardRequestType } from '../../../../api'

import { cardsPackActions } from './constants'
type DataType = NewCardRequestType | DeleteCardRequestType | UpdateCardRequestType

type HandlerFunctionType = (data: DataType) => void

type useHandleActionType = (
  actionType: keyof typeof cardsPackActions,
  refetch: () => void
) => {
  handler: HandlerFunctionType
  isLoading: boolean
  error: FetchBaseQueryError | SerializedError | undefined
}

export const useHandleAction: useHandleActionType = (actionType, refetch) => {
  const mutation = cardsPackActions[actionType]
  const [trigger, { isLoading, error }] = mutation()

  const handler: HandlerFunctionType = async data => {
    await trigger(data)
    refetch()
  }

  return { handler, isLoading, error }
}
