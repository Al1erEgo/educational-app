import {
  useDeleteCardMutation,
  useNewCardMutation,
  useUpdateCardMutation,
} from '../../../../../api'

//TODO убрать any
type CardsPackActionsType = { [key: string]: any }

export const cardsPackActions: CardsPackActionsType = {
  addCard: useNewCardMutation,
  deleteCard: useDeleteCardMutation,
  updateCard: useUpdateCardMutation,
} as const
