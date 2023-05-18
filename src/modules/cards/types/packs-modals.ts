import {
  DeletedCardsPackRequestType,
  NewCardPacksRequestType,
  UpdateCardsPackRequestType,
} from '../api'

import { CardsModalsHandlerType } from './cards-modals'

export type PacksModalPayloadType =
  | NewCardPacksRequestType
  | UpdateCardsPackRequestType

export type PacksModalsHandlersType = {
  addPackModal: CardsModalsHandlerType<NewCardPacksRequestType>
  updatePackModal: CardsModalsHandlerType<UpdateCardsPackRequestType>
  deletePackModal: CardsModalsHandlerType<
    DeletedCardsPackRequestType & {
      name?: string
    }
  >
}

export type ModalPackFormType = {
  name?: string
  deckCover?: string
  private?: boolean
}

export type ModalPackPictureType = {
  name?: string
  deckCover?: string
  private?: boolean
}

export type ModalPackFormatType = 'text' | 'picture'
