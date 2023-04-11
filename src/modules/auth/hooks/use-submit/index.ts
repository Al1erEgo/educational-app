import { MutationTrigger } from '@reduxjs/toolkit/dist/query/react/buildHooks'
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  MutationDefinition,
} from '@reduxjs/toolkit/query'
import { useNavigate } from 'react-router-dom'

import { isFetchBaseQueryError } from '../../../../utils'
import { AuthApiResponseTypes } from '../../auth-api'

type CustomMutationTriggerType<T> = MutationTrigger<
  MutationDefinition<
    T,
    BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>,
    'authMe',
    AuthApiResponseTypes,
    'cards'
  >
>

type SetErrorType = (name: 'error', data: { message: string }) => void

//Hook get trigger from mutation hook, setError function from React Hook Form and path to redirect after successful mutation.
export const useSubmit = <T>(
  trigger: CustomMutationTriggerType<T>,
  setError: SetErrorType,
  path?: string
) => {
  const navigate = useNavigate()

  return async (data: T) => {
    try {
      await trigger(data)
      if (path) navigate(path)
    } catch (e: unknown) {
      if (isFetchBaseQueryError(e)) {
        setError('error', { message: e.data.error })
      }
    }
  }
}
