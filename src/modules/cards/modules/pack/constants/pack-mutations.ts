import { UseMutation } from '@reduxjs/toolkit/dist/query/react/buildHooks'
import { MutationDefinition } from '@reduxjs/toolkit/query'

import {
  useDeleteCardMutation,
  useDeleteCardsPackMutation,
  useNewCardMutation,
  useUpdateCardMutation,
  useUpdateCardsPackMutation,
} from '../../../api'

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
  updatePack: { mutation: useUpdateCardsPackMutation, isRefetch: true },
  deletePack: { mutation: useDeleteCardsPackMutation, isRefetch: false },
} as const
