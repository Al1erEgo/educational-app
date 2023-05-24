import {
  DeletedCardsPackRequestType,
  NewCardPacksRequestType,
  UpdateCardsPackRequestType,
} from '@/modules/cards/api'
import { CardsModalsHandlerType } from '@/modules/cards/types/cards-modals'

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

export type ModalPackFormDataType = {
  name?: string
  deckCover?: string
  private?: boolean
}
