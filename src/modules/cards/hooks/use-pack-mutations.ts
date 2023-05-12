import { packMutations } from '../constants'
import {
  PackMutationsObjType,
  PacksMutationsWithConditionsType,
} from '../types'

import { usePackMutation } from './use-pack-mutation'

type UsePackMutationsType = (
  refetchPack: () => void
) => PacksMutationsWithConditionsType

export const usePackMutations: UsePackMutationsType = refetchPack => {
  const mutations: PackMutationsObjType = {}

  Object.keys(packMutations).forEach(name => {
    mutations[name] = usePackMutation(name, refetchPack)
  })

  const { addCard, deleteCard, updateCard, updatePack, deletePack } = mutations

  const mutationsError =
    addCard.error ||
    deleteCard.error ||
    updateCard.error ||
    updatePack.error ||
    deletePack.error
  const mutationsLoading =
    addCard.isLoading ||
    deleteCard.isLoading ||
    updateCard.isLoading ||
    deletePack.isLoading

  return [mutations, mutationsLoading, mutationsError]
}
