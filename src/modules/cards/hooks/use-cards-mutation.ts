import { packMutations } from '@/modules/cards/constants'
import { HandlerFunctionType, TableErrorType } from '@/modules/cards/types'

type UsePackMutationType = (
  mutationType: keyof typeof packMutations,
  refetch: () => void
) => {
  handler: HandlerFunctionType
  isLoading: boolean
  error: TableErrorType
}

export const useCardsMutation: UsePackMutationType = (
  mutationType,
  refetch
) => {
  const { mutation, isRefetch } = packMutations[mutationType]
  const [trigger, { isLoading, error }] = mutation()

  const handler: HandlerFunctionType = async data => {
    await trigger(data)
    if (isRefetch) {
      refetch()
    }
  }

  return { handler, isLoading, error }
}
