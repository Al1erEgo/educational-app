import { TableErrorType } from '../../../../../types'
import { packsMutations } from '../constants/packs-mutations'
import { HandlerPacksFunctionType } from '../types'

type UsePacksMutationType = (
  mutationType: keyof typeof packsMutations,
  refetch: () => void
) => {
  handlers: HandlerPacksFunctionType
  isLoadings: boolean
  errors: TableErrorType
}

export const usePacksMutation: UsePacksMutationType = (mutationType, refetch) => {
  const { mutation, isRefetch } = packsMutations[mutationType]
  const [trigger, { isLoading: isLoadings, error: errors }] = mutation()

  const handlers: HandlerPacksFunctionType = async data => {
    await trigger(data).unwrap()
    if (isRefetch) {
      refetch()
    }
  }

  return { handlers, isLoadings, errors }
}
