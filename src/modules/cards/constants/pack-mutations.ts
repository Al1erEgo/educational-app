import { UseMutation } from '@reduxjs/toolkit/dist/query/react/buildHooks'
import { MutationDefinition } from '@reduxjs/toolkit/query'

import {
  useDeleteCardMutation,
  useDeleteCardsPackMutation,
  useNewCardMutation,
  useNewCardsPackMutation,
  useUpdateCardMutation,
  useUpdateCardsPackMutation,
} from '../api'

type PackMutationsType = {
  [key: string]: {
    mutation: UseMutation<MutationDefinition<any, any, string, any>>
    isRefetch?: boolean
  }
}

export const packMutations: PackMutationsType = {
  addCard: { mutation: useNewCardMutation, isRefetch: true },
  deleteCard: { mutation: useDeleteCardMutation, isRefetch: true },
  updateCard: { mutation: useUpdateCardMutation, isRefetch: true },
  addCards: { mutation: useNewCardsPackMutation, isRefetch: true },
  updateCards: { mutation: useUpdateCardsPackMutation, isRefetch: true },
  deleteCards: { mutation: useDeleteCardsPackMutation, isRefetch: false },
} as const
