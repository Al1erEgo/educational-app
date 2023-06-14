import { NewCardPacksRequestType, UpdateCardsPackRequestType } from '@/modules/cards/types/api-dtos'

export type PacksModalPayloadType = NewCardPacksRequestType | UpdateCardsPackRequestType

export type ModalPackFormDataType = {
  name?: string
  deckCover?: string
  private?: boolean
}
