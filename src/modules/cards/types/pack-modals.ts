import { NewCardRequestType, UpdateCardRequestType } from '@/modules/cards/api'

export type PackModalCardPayloadType =
  | NewCardRequestType
  | UpdateCardRequestType

export type ModalCardFormDataType = {
  question?: string
  answer?: string
  questionImg?: string
  answerImg?: string
}
