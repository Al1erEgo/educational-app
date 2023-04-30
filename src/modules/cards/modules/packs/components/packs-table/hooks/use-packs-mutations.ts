import { packsMutations } from '../constants/packs-mutations'
import { MutationsPackObjType, MutationsWithConditionsPackType } from '../types'

import { usePacksMutation } from './use-packs-mutation'

type UsePackMutationsType = (refetchPack: () => void) => MutationsWithConditionsPackType

export const usePacksMutations: UsePackMutationsType = refetchPack => {
  const mutations: MutationsPackObjType = {}

  Object.keys(packsMutations).forEach(name => {
    mutations[name] = usePacksMutation(name, refetchPack)
  })

  const { addPacks, updatePacks, deletePacks } = mutations

  const actionsError = addPacks.errors || updatePacks.errors || deletePacks.errors
  const actionsLoading = addPacks.isLoadings || updatePacks.isLoadings || deletePacks.isLoadings

  return [mutations, actionsLoading, actionsError]
}
