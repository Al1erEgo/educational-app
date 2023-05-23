import { NewCardRequestType, UpdateCardRequestType } from '../api'

export type PackModalCardPayloadType =
  | NewCardRequestType
  | UpdateCardRequestType

export type ModalCardFormDataType = {
  question?: string
  answer?: string
  questionImg?: string
  answerImg?: string
}
