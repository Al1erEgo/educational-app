import { useCardsMutation } from './use-cards-mutation'

import { packMutations } from '@/modules/cards/constants'
import { CardsMutationsObjType, CardsMutationsWithConditionsType } from '@/modules/cards/types'

type UseCardsMutationsType = (refetchPack: () => void) => CardsMutationsWithConditionsType

export const useCardsMutations: UseCardsMutationsType = refetchPack => {
  const mutations: CardsMutationsObjType = {}

  Object.keys(packMutations).forEach(name => {
    mutations[name] = useCardsMutation(name, refetchPack)
  })

  const { addCard, deleteCard, updateCard, addCardsPack, updateCardsPack, deleteCardsPack } = mutations

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
