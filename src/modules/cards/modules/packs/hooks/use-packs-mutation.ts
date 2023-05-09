import { TableErrorType } from '../../../types'
import { packsMutations } from '../constants'
import { HandlerPacksFunctionType } from '../types'

type UsePacksMutationType = (
  mutationType: keyof typeof packsMutations,
  refetch: () => void
) => {
  handlers: HandlerPacksFunctionType
  isLoadings: boolean
  errors: TableErrorType
}

/**
 A custom hook that returns mutation handlers and their corresponding loading and error states for managing packs data.

 @param {string} mutationType - The type of mutation to perform.
 @param {Function} refetch - A function that refetches the packs data.

 @returns {Object} An object containing the mutation handlers and their corresponding loading and error states.
 */

export const usePacksMutation: UsePacksMutationType = (mutationType, refetch) => {
  const { mutation, isRefetch } = packsMutations[mutationType]

  /**
   * The `trigger` function returned by the `useMutation` hook.
   * @type {Function}
   */
  const [trigger, { isLoading: isLoadings, error: errors }] = mutation()

  /**
   * An object containing the mutation handlers.
   * @type {Object}
   */
  const handlers: HandlerPacksFunctionType = async data => {
    await trigger(data).unwrap()
    if (isRefetch) {
      refetch()
    }
  }

  return { handlers, isLoadings, errors }
}
