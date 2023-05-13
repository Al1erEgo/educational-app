import {
  DeleteCardRequestType,
  NewCardRequestType,
  UpdateCardRequestType,
  UpdateCardsPackRequestType,
} from '../api'

export type PackBaseModalType = {
  payload: PackModalsPayloadType
  onSubmit: PackModalsOnSubmitType
  onCancel: () => void
}

export type PackModalsPayloadType =
  | NewCardRequestType
  | DeleteCardRequestType
  | UpdateCardRequestType
  | UpdateCardsPackRequestType

export type PackModalsOnSubmitType = (payload: PackModalsPayloadType) => void

export type PackModalsHandlers = {
  [key: string]: PackModalsOnSubmitType
}
