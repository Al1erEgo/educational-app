import {
  DeleteCardRequestType,
  NewCardRequestType,
  UpdateCardRequestType,
} from '../api'

import { PackModalCardPayloadType } from './pack-modals'
import { PacksModalPayloadType, PacksModalsHandlersType } from './packs-modals'

export type CardsModalsOnSubmitType<T> = (payload: T) => void

export type CardsModalBaseType<T> = {
  payload: T
  onSubmit: CardsModalsOnSubmitType<T>
  onCancel: () => void
  redirect?: () => void
}

export type CardsModalsHandlerType<T> = (
  payload: T,
  redirect?: () => void
) => void

export type CardsModalPayloadType =
  | PackModalCardPayloadType
  | PacksModalPayloadType

export type CardsModalsHandlersType = {
  addCardModal: CardsModalsHandlerType<NewCardRequestType>
  updateCardModal: CardsModalsHandlerType<UpdateCardRequestType>
  deleteCardModal: CardsModalsHandlerType<DeleteCardRequestType>
} & PacksModalsHandlersType

export enum ModalCardsFormat {
  TEXT = 'text',
  IMG = 'img',
  IMGPACK = 'imgPack',
}
