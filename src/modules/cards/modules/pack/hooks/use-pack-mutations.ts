import { packMutations } from '../constants'
import { MutationsObjType, MutationsWithConditionsType } from '../types'

import { usePackMutation } from './use-pack-mutation'

type UsePackMutationsType = (refetchPack: () => void) => MutationsWithConditionsType

export const usePackMutations: UsePackMutationsType = refetchPack => {
  const mutations: MutationsObjType = {}

  Object.keys(packMutations).forEach(name => {
    mutations[name] = usePackMutation(name, refetchPack)
  })

  const { addCard, deleteCard, updateCard, updatePack, deletePack } = mutations

  const actionsError =
    addCard.error || deleteCard.error || updateCard.error || updatePack.error || deletePack.error
  const actionsLoading =
    addCard.isLoading || deleteCard.isLoading || updateCard.isLoading || deletePack.isLoading

  return [mutations, actionsLoading, actionsError]
}
