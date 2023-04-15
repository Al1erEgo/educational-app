import { MAIN_PATH } from '../../../../../constants'
import {
  useLoginMutation,
  useRegisterMutation,
  useRequestPasswordResetMutation,
} from '../../../api'
import { AUTH_PATH } from '../../../constants'

type mutationAndPathByFormType = {
  login: { mutation: any; path: string }
  signup: { mutation: any; path: string }
  resetPassword: { mutation: any; path?: string }
  newPassword: { mutation: any; path?: string }
}

export const mutationAndPathByForm: mutationAndPathByFormType = {
  login: {
    mutation: useLoginMutation,
    path: MAIN_PATH.Root,
  },
  signup: {
    mutation: useRegisterMutation,
    path: `${MAIN_PATH.Auth}${AUTH_PATH.SignIn}`,
  },
  resetPassword: {
    mutation: useRequestPasswordResetMutation,
  },
  newPassword: {
    mutation: useRequestPasswordResetMutation,
  },
}
