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
    addCardsPack,
    updateCardsPack,
    deleteCardsPack,
  } = mutations

  const mutationsError =
    addCard.error ||
    deleteCard.error ||
    updateCard.error ||
    addCardsPack.error ||
    updateCardsPack.error ||
    deleteCardsPack.error
  const mutationsLoading =
    addCard.isLoading ||
    deleteCard.isLoading ||
    updateCard.isLoading ||
    addCardsPack.isLoading ||
    updateCardsPack.isLoading ||
    deleteCardsPack.isLoading

  return [mutations, mutationsLoading, mutationsError]
}
