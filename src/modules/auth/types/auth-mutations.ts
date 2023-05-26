import { MutationTrigger } from '@reduxjs/toolkit/dist/query/react/buildHooks'
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  MutationDefinition,
} from '@reduxjs/toolkit/query'

import { AuthApiResponseTypes } from './api'

import { authMutations } from '@/modules/auth/constants'

export type CustomMutationTriggerType<T> = MutationTrigger<
  MutationDefinition<
    T,
    BaseQueryFn<
      string | FetchArgs,
      unknown,
      FetchBaseQueryError,
      {},
      FetchBaseQueryMeta
    >,
    'authMe',
    AuthApiResponseTypes,
    'cards'
  >
>

export type MutationType = keyof typeof authMutations

export type OnSubmitMutationType = <T>(data?: T) => Promise<void>

export type UseMutationReturnType<T> = [
  OnSubmitMutationType,
  {
    trigger: CustomMutationTriggerType<T>
    isLoading: boolean
    isSuccess: boolean
    error: unknown
  }
]
