import {
  useDeleteCardMutation,
  useDeleteCardsPackMutation,
  useNewCardMutation,
  useUpdateCardMutation,
  useUpdateCardsPackMutation,
} from '../../../api'

//TODO убрать any
type packMutationsType = { [key: string]: { mutation: any; isRefetch?: boolean } }

export const packMutations: packMutationsType = {
  addCard: { mutation: useNewCardMutation, isRefetch: true },
  deleteCard: { mutation: useDeleteCardMutation, isRefetch: true },
  updateCard: { mutation: useUpdateCardMutation, isRefetch: true },
  updatePack: { mutation: useUpdateCardsPackMutation, isRefetch: true },
  deletePack: { mutation: useDeleteCardsPackMutation, isRefetch: false },
} as const
