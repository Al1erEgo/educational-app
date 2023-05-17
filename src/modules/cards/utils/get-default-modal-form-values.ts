import { ModalCardFormat, PackModalCardPayloadType } from '../types/pack-modals'

export const getDefaultModalFormValues = <T extends PackModalCardPayloadType>(
  formType: ModalCardFormat,
  payload: T
) => {
  if (formType === ModalCardFormat.IMG) {
    return {
      questionImg: payload?.card.questionImg || '',
      answerImg: payload?.card.answerImg || '',
    }
  }
  if (formType === ModalCardFormat.TEXT) {
    return {
      question: payload?.card.question || '',
      answer: payload?.card.answer || '',
    }
  }
}
