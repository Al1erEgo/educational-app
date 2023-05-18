import {
  DeleteCardRequestType,
  NewCardRequestType,
  UpdateCardRequestType,
} from '../api'

import { CardsModalsHandlerType } from './cards-modals'
import { PacksModalsHandlersType } from './packs-modals'

export type PackModalCardPayloadType =
  | NewCardRequestType
  | UpdateCardRequestType

export type PackModalsHandlersType = {
  addCardModal: CardsModalsHandlerType<NewCardRequestType>
  updateCardModal: CardsModalsHandlerType<UpdateCardRequestType>
  deleteCardModal: CardsModalsHandlerType<DeleteCardRequestType>
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
