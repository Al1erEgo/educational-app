import { UseMutation } from '@reduxjs/toolkit/dist/query/react/buildHooks'
import { MutationDefinition } from '@reduxjs/toolkit/query'

import {
  useDeleteCardsPackMutation,
  useNewCardsPackMutation,
  useUpdateCardsPackMutation,
} from '../../../api'

type PacksMutationsType = {
  [key: string]: {
    mutation: UseMutation<MutationDefinition<any, any, string, any>>
    isRefetch?: boolean
  }
}

/**
 * An object that maps mutation keys to their corresponding `useMutation` hook and refetch settings.
 * @property {Object} key - The key of the mutation.
 * @property {UseMutation<MutationDefinition<any, any, string, any>>} mutation - The `useMutation` hook that executes the mutation.
 * @property {boolean} isRefetch - A boolean value indicating whether the mutation should trigger a refetch of the data.
 */

export const packsMutations: PacksMutationsType = {
  addPacks: { mutation: useNewCardsPackMutation, isRefetch: true },
  updatePacks: { mutation: useUpdateCardsPackMutation, isRefetch: true },
  deletePacks: { mutation: useDeleteCardsPackMutation, isRefetch: false },
} as const
