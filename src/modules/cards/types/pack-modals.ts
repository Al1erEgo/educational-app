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

export type ModalCardFormType = {
  question?: string
  answer?: string
}

export type ModalCardPictureType = {
  questionImg?: string
  answerImg?: string
}

export type ModalCardFormatType = 'text' | 'picture'
