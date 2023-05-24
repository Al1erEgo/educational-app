import {
  DeleteCardRequestType,
  NewCardRequestType,
  UpdateCardRequestType,
} from '@/modules/cards/api'
import { PackModalCardPayloadType } from '@/modules/cards/types/pack-modals'
import {
  PacksModalPayloadType,
  PacksModalsHandlersType,
} from '@/modules/cards/types/packs-modals'

export type CardsModalsOnSubmitType<T> = (payload: T) => void

export type CardsModalBaseType<T> = {
  payload: T
  onSubmit: CardsModalsOnSubmitType<T>
  onCancel: () => void
}

export type CardsModalsHandlerType<T> = CardsModalsOnSubmitType<T>

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
