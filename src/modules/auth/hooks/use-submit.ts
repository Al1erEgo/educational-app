import { useNavigate } from 'react-router-dom'

import { CustomMutationTriggerType } from '@/modules/auth/types'

type UseSubmitType = <T>(
  trigger: CustomMutationTriggerType<T>,
  path?: string
) => (data: T) => Promise<void>

/**
A hook that returns a function to submit form data and trigger a custom mutation based on the provided trigger function.
@template T - The type of form data.
@param {function} trigger - A function that triggers a custom mutation.
@param {string} [path] - An optional string representing the path to navigate after successful form submission.
@returns {function} - A function to submit form data and trigger the custom mutation.
 */
export const useSubmit: UseSubmitType = (trigger, path) => {
  const navigate = useNavigate()

  return async data => {
    try {
      await trigger(data).unwrap()
      if (path) navigate(path)
    } catch (e: unknown) {
      return
    }
  }
}
