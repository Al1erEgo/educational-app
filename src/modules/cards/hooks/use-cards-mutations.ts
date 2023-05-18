import { packMutations } from '../constants'
import {
  PackMutationsObjType,
  PacksMutationsWithConditionsType,
} from '../types'

import { useCardsMutation } from './use-cards-mutation'

type UsePackMutationsType = (
  refetchPack: () => void
) => PacksMutationsWithConditionsType

export const useCardsMutations: UsePackMutationsType = refetchPack => {
  const mutations: PackMutationsObjType = {}

  Object.keys(packMutations).forEach(name => {
    mutations[name] = useCardsMutation(name, refetchPack)
  })

  const { addCard, deleteCard, updateCard, addPack, updatePack, deletePack } =
    mutations

  const mutationsError =
    addCard.error ||
    deleteCard.error ||
    updateCard.error ||
    addPack.error ||
    updatePack.error ||
    deletePack.error
  const mutationsLoading =
    addCard.isLoading ||
    deleteCard.isLoading ||
    updateCard.isLoading ||
    addPack.isLoading ||
    updatePack.isLoading ||
    deletePack.isLoading

  return [mutations, mutationsLoading, mutationsError]
}
