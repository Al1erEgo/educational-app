import {
  ModalCardFormDataType,
  ModalCardsFormat,
  ModalPackFormDataType,
  PackModalCardPayloadType,
  PacksModalPayloadType,
} from '../types'

export const getDefaultModalFormValues = <
  T extends PackModalCardPayloadType & PacksModalPayloadType,
  D extends ModalCardFormDataType & ModalPackFormDataType
>(
  formType: ModalCardsFormat,
  payload: T
) => {
  if (formType === ModalCardsFormat.IMG) {
    return {
      questionImg: payload.card?.questionImg || '',
      answerImg: payload.card?.answerImg || '',
    }
  }
  if (formType === ModalCardsFormat.TEXT) {
    return {
      question: payload.card?.question || '',
      answer: payload.card?.answer || '',
    }
  }
  if (formType === ModalCardsFormat.IMGPACK) {
    return {
      name: payload.cardsPack?.name || '',
      deckCover: payload.cardsPack?.deckCover || '',
      private: payload.cardsPack?.private || false,
    }
  }
  if (formType === ModalCardsFormat.TEXTPACK) {
    return {
      name: payload.cardsPack?.name || '',
      private: payload.cardsPack?.private || false,
    }
  }
}
