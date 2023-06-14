import { PackModalCardPayloadType } from './pack-modals'
import { PacksModalPayloadType } from './packs-modals'

import {
  DeleteCardRequestType,
  DeletedCardsPackRequestType,
  NewCardPacksRequestType,
  NewCardRequestType,
  UpdateCardRequestType,
  UpdateCardsPackRequestType,
} from '@/modules/cards/types/api-dtos'

export type CardsModalsOnSubmitType<T> = (payload: T) => void

export type CardsModalBaseProps<T> = {
  payload: T
  onSubmit: CardsModalsOnSubmitType<T>
  onCancel: () => void
  redirect?: () => void
}

export type CardsModalsHandlerType<T> = (payload: T, redirect?: () => void) => void

export type CardsModalPayloadType = PackModalCardPayloadType | PacksModalPayloadType

export type CardsModalsHandlersType = {
  addCardModal: CardsModalsHandlerType<NewCardRequestType>
  updateCardModal: CardsModalsHandlerType<UpdateCardRequestType>
  deleteCardModal: CardsModalsHandlerType<DeleteCardRequestType>
  addPackModal: CardsModalsHandlerType<NewCardPacksRequestType>
  updatePackModal: CardsModalsHandlerType<UpdateCardsPackRequestType>
  deletePackModal: CardsModalsHandlerType<
    DeletedCardsPackRequestType & {
      name?: string
    }
  >
}

export enum ModalCardsFormat {
  TEXT = 'text',
  IMG = 'img',
  IMGPACK = 'imgPack',
}
