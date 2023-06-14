import { NewCardPacksRequestType, UpdateCardsPackRequestType } from '../api'

export type PacksModalPayloadType = NewCardPacksRequestType | UpdateCardsPackRequestType

export type ModalPackFormDataType = {
  name?: string
  deckCover?: string
  private?: boolean
}
