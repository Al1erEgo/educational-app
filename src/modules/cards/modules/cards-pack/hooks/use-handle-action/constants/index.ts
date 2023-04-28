import {
  useDeleteCardMutation,
  useDeleteCardsPackMutation,
  useNewCardMutation,
  useUpdateCardMutation,
  useUpdateCardsPackMutation,
} from '../../../../../api'

//TODO убрать any
type CardsPackActionsType = { [key: string]: { mutation: any; isRefetch?: boolean } }

export const cardsPackActions: CardsPackActionsType = {
  addCard: { mutation: useNewCardMutation, isRefetch: true },
  deleteCard: { mutation: useDeleteCardMutation, isRefetch: true },
  updateCard: { mutation: useUpdateCardMutation, isRefetch: true },
  updatePack: { mutation: useUpdateCardsPackMutation, isRefetch: true },
  deletePack: { mutation: useDeleteCardsPackMutation, isRefetch: false },
} as const
