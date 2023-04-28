import { TableErrorType } from '../../../../types'
import { useHandleAction } from '../use-handle-action'
import { cardsPackActions } from '../use-handle-action/constants'

export type ActionsObjType = { [key: string]: ReturnType<typeof useHandleAction> }

export type ActionsWithConditionsType = [ActionsObjType, boolean, TableErrorType]

type UsePackActionsType = (refetchPack: () => void) => ActionsWithConditionsType

export const usePackActions: UsePackActionsType = refetchPack => {
  const actions: ActionsObjType = {}

  Object.keys(cardsPackActions).forEach(name => {
    actions[name] = useHandleAction(name, refetchPack)
  })

  const { addCard, deleteCard, updateCard, updatePack, deletePack } = actions

  const actionsError =
    addCard.error || deleteCard.error || updateCard.error || updatePack.error || deletePack.error
  const actionsLoading =
    addCard.isLoading || deleteCard.isLoading || updateCard.isLoading || deletePack.isLoading

  return [actions, actionsLoading, actionsError]
}
