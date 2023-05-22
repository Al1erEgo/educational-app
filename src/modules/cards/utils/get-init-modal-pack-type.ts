import { ModalCardsFormat, PacksModalPayloadType } from '../types'

export const getInitModalPackType = <T extends PacksModalPayloadType>(
  payload: T
) =>
  payload.cardsPack?.deckCover
    ? ModalCardsFormat.IMGPACK
    : ModalCardsFormat.TEXTPACK
