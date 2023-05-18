import {
  DeleteCardRequestType,
  NewCardRequestType,
  UpdateCardRequestType,
} from '../api'

import { PacksModalsHandlersType } from './packs-modals'

export type PackModalsOnSubmitType<T> = (payload: T) => void

export type PackModalBaseType<T> = {
  payload: T
  onSubmit: PackModalsOnSubmitType<T>
  onCancel: () => void
}

export type PackModalCardPayloadType =
  | NewCardRequestType
  | UpdateCardRequestType

export type PackModalsHandlerType<T> = PackModalsOnSubmitType<T>

export type PackModalsHandlersType = {
  addCardModal: PackModalsHandlerType<NewCardRequestType>
  updateCardModal: PackModalsHandlerType<UpdateCardRequestType>
  deleteCardModal: PackModalsHandlerType<DeleteCardRequestType>
} & PacksModalsHandlersType

export type ModalCardFormDataType = {
  question?: string
  answer?: string
  questionImg?: string
  answerImg?: string
}

export enum ModalCardFormat {
  TEXT = 'text',
  IMG = 'img',
}
