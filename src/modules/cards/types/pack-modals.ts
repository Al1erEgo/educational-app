import {
  DeleteCardRequestType,
  NewCardRequestType,
  UpdateCardRequestType,
  UpdateCardsPackRequestType,
} from '../api'

export type PackModalsPayloadType =
  | NewCardRequestType
  | DeleteCardRequestType
  | UpdateCardRequestType
  | UpdateCardsPackRequestType
export type PackModalsOnSubmitType = (payload: PackModalsPayloadType) => void
