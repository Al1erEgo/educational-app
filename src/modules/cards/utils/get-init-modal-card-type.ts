import { ModalCardFormat, PackModalCardPayloadType } from '../types'

export const getInitModalCardType = <T extends PackModalCardPayloadType>(
  payload: T
) =>
  payload.card.questionImg || payload.card.answerImg
    ? ModalCardFormat.IMG
    : ModalCardFormat.TEXT
