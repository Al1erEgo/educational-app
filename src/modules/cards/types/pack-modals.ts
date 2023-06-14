import { NewCardRequestType, UpdateCardRequestType } from '@/modules/cards/types/api-dtos'

export type PackModalCardPayloadType = NewCardRequestType | UpdateCardRequestType

export type ModalCardFormDataType = {
  question?: string
  answer?: string
  questionImg?: string
  answerImg?: string
}
