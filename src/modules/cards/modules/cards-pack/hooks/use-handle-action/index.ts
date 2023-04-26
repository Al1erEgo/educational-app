export const useHandleAction = (actionType, refetch) => {
  const [trigger, { isLoading, error }] = actions[actionType]
  const handler = async data => {
    await trigger(data)
    refetch()
  }
}
