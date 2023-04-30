import { UseMutation } from '@reduxjs/toolkit/dist/query/react/buildHooks'
import { MutationDefinition } from '@reduxjs/toolkit/query'

import { MAIN_PATH } from '../../../constants'
import {
  useAuthMeLogOutMutation,
  useAuthMeUpdateMutation,
  useLoginMutation,
  useRegisterMutation,
  useRequestPasswordResetMutation,
  useSetNewPasswordMutation,
} from '../api'

import { ABSOLUTE_AUTH_PATH } from './index'

type AuthMutationsType = {
  [key: string]: { mutation: UseMutation<MutationDefinition<any, any, string, any>>; path?: string }
}

export const authMutations: AuthMutationsType = {
  login: {
    mutation: useLoginMutation,
    path: MAIN_PATH.Root,
  },
  logout: {
    mutation: useAuthMeLogOutMutation,
    path: ABSOLUTE_AUTH_PATH.SignIn,
  },
  signup: {
    mutation: useRegisterMutation,
  },
  resetPassword: {
    mutation: useRequestPasswordResetMutation,
  },
  newPassword: {
    mutation: useSetNewPasswordMutation,
  },
  updateUserName: {
    mutation: useAuthMeUpdateMutation,
  },
} as const
