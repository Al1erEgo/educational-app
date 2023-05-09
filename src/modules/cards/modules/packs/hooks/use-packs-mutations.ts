import { packsMutations } from '../constants'
import { MutationsPackObjType, MutationsWithConditionsPackType } from '../types'

import { usePacksMutation } from './use-packs-mutation'

type UsePackMutationsType = (refetchPack: () => void) => MutationsWithConditionsPackType

/**
 A custom hook that returns mutations and their corresponding loading and error states for managing packs data.

 @param {Function} refetchPack - A function that refetches the packs data.

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
  const actionsError = addPacks.errors || updatePacks.errors || deletePacks.errors

  /**
   * An object containing the error state of each mutation.
   * @type {Object}
   */
  const actionsLoading = addPacks.isLoadings || updatePacks.isLoadings || deletePacks.isLoadings

  return [mutations, actionsLoading, actionsError]
}
