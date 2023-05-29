import { redirect } from 'react-router-dom'

import { authMutations } from '@/modules/auth/constants'
import {
  MutationType,
  OnSubmitMutationType,
  UseMutationReturnType,
} from '@/modules/auth/types'

type UseAuthMutationType = <T>(
  mutationArg: MutationType
) => UseMutationReturnType<T>
/**
 A hook that returns a mutation trigger function and a form submission function for a given mutation type.
 @param {MutationType} mutationArg - A string representing the type of mutation.
 @returns {Array} - An array containing a mutation trigger function and a form submission function.
 */

export const useAuthMutation: UseAuthMutationType = mutationArg => {
  const { mutation, path } = authMutations[mutationArg]

  const [trigger, { isLoading, isSuccess, error }] = mutation()

  const onSubmit: OnSubmitMutationType = async data => {
    try {
      await trigger(data).unwrap()
      if (path) redirect(path)
    } catch (e: unknown) {
      return
    }
  }

  return [onSubmit, { trigger, isLoading, isSuccess, error }]
}
