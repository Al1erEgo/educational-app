import { redirect } from 'react-router-dom'

import { authMutations } from '@/modules/auth/constants'
import { CustomMutationTriggerType } from '@/modules/auth/types'

type MutationType = keyof typeof authMutations

type OnSubmitMutationType = <T>(data?: T) => Promise<void>

export type UseMutationReturnType<T> = [
  OnSubmitMutationType,
  {
    trigger: CustomMutationTriggerType<T>
    isLoading: boolean
    isSuccess: boolean
    error: unknown
  }
]

type UseAuthMutationType = <T>(
  mutationArg: MutationType
) => UseMutationReturnType<T>
/**
 A hook that returns a mutation trigger function and a form submission function for a given mutation type.
 @param {MutationType} mutationArg - A string representing the type of mutation.
 @returns {Array} - An array containing a mutation trigger function and a form submission function.
 */

//TODO убрать any
export const useAuthMutation: UseAuthMutationType = mutationArg => {
  //Get mutation and path to redirect(if provided) from defined object by specified key
  const { mutation, path } = authMutations[mutationArg]
  // Get mutation trigger and status using the useMutation hook
  const [trigger, { isLoading, isSuccess, error }] = mutation()
  // Define a form submission function that will trigger the mutation and navigate to a specified path (if provided)
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
