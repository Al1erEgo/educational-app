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

export const packsMutations: PacksMutationsType = {
  addPacks: { mutation: useNewCardsPackMutation, isRefetch: true },
  updatePacks: { mutation: useUpdateCardsPackMutation, isRefetch: true },
  deletePacks: { mutation: useDeleteCardsPackMutation, isRefetch: false },
} as const
