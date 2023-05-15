import { packsMutations } from '../constants'
import { MutationsPackObjType, MutationsWithConditionsPackType } from '../types'

import { usePacksMutation } from './use-packs-mutation'

type UsePackMutationsType = (
  refetchPack: () => void
) => MutationsWithConditionsPackType

/**
 A custom hook that takes a function that refetches pack data and returns an array with the
 mutations and their corresponding loading and error states. The mutations are obtained by
 iterating over the keys of packsMutations object and calling the usePacksMutation hook for
 each key, passing the key and refetchPack function as arguments.

 @param {Function} refetchPack - A function that refetches the pack's data.

 @returns {MutationsWithConditionsPackType} An array containing the mutations and their
 corresponding loading and error states.
 */
export const usePacksMutations: UsePackMutationsType = refetchPack => {
  /**
   * An object that maps mutation keys to their corresponding `usePacksMutation` hook.
   * @type {MutationsPackObjType}
   */
  const mutations: MutationsPackObjType = {}

  Object.keys(packsMutations).forEach(name => {
    mutations[name] = usePacksMutation(name, refetchPack)
  })

  const { addPacks, updatePacks, deletePacks } = mutations

  /**
   * An object containing the loading state of each mutation.
   * @type {Object}
   */
  const actionsError =
    addPacks.errors || updatePacks.errors || deletePacks.errors

  /**
   * An object containing the error state of each mutation.
   * @type {Object}
   */
  const actionsLoading =
    addPacks.isLoadings || updatePacks.isLoadings || deletePacks.isLoadings

  return [mutations, actionsLoading, actionsError]
}

//TODO rename actions to mutations, isLoadings and errors to isLoading and error
