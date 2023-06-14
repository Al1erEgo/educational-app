import { CardsModalPayloadType, ModalCardsFormat } from '@/modules/cards/types'

export const getDefaultModalFormValues = <T extends CardsModalPayloadType>(formType: ModalCardsFormat, payload: T) => {
  if (formType === ModalCardsFormat.IMG && 'card' in payload) {
    return {
      questionImg: payload.card.questionImg || '',
      answerImg: payload.card.answerImg || '',
    }
  }
  if (formType === ModalCardsFormat.TEXT && 'card' in payload) {
    return {
      question: payload.card.question || '',
      answer: payload.card.answer || '',
    }
  }
  if (formType === ModalCardsFormat.IMGPACK && 'cardsPack' in payload) {
    return {
      name: payload.cardsPack.name || '',
      deckCover: payload.cardsPack.deckCover || '',
      private: payload.cardsPack.private || false,
    }
  }
}
