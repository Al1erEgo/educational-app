import { MutationTrigger } from '@reduxjs/toolkit/dist/query/react/buildHooks'
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  MutationDefinition,
} from '@reduxjs/toolkit/query'

import { AuthApiResponseTypes } from '../api/types'

export type CustomMutationTriggerType<T> = MutationTrigger<
  MutationDefinition<
    T,
    BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>,
    'authMe',
    AuthApiResponseTypes,
    'cards'
  >
>
