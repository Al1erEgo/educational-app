import {
  DeleteCardRequestType,
  NewCardRequestType,
  UpdateCardRequestType,
  UpdateCardsPackRequestType,
} from '../api'

export type PackBaseModalType<T> = {
  payload: T
  onSubmit: PackModalsOnSubmitType<T>
  onCancel: () => void
}

export type PackModalsPayloadType =
  | NewCardRequestType
  | DeleteCardRequestType
  | UpdateCardRequestType
  | UpdateCardsPackRequestType

export type PackModalsOnSubmitType<T> = (payload: T) => void

export type PackModalsHandlers = {
  addCardModal: PackModalsOnSubmitType<NewCardRequestType>
  deleteCardModal: PackModalsOnSubmitType<DeleteCardRequestType>
}

export type ModalCardFormType = {
  question?: string
  answer?: string
}
