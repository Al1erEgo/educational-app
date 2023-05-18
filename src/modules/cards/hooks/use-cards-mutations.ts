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

  const {
    addCard,
    deleteCard,
    updateCard,
    addCards,
    updateCards,
    deleteCards,
  } = mutations

  const mutationsError =
    addCard.error ||
    deleteCard.error ||
    updateCard.error ||
    addCards.error ||
    updateCards.error ||
    deleteCards.error
  const mutationsLoading =
    addCard.isLoading ||
    deleteCard.isLoading ||
    updateCard.isLoading ||
    addCards.isLoading ||
    updateCards.isLoading ||
    deleteCards.isLoading

  return [mutations, mutationsLoading, mutationsError]
}
