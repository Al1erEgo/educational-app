import { rootApi } from '../../../store/root-api'

import {
  AuthMeRequestType,
  AuthMeResponseType,
  LoginRequestType,
  LoginResponseType,
  LogOutRequestType,
  LogOutResponseType,
  PasswordResetRequestType,
  PasswordResetResponseType,
  RegisterRequestType,
  RegisterResponseType,
  SetNewPasswordRequestType,
  SetNewPasswordResponseType,
  UpdateRequestType,
  UpdateResponseType,
} from './types'

export const authApi = rootApi.injectEndpoints({
  endpoints: builder => ({
    register: builder.mutation<RegisterResponseType, RegisterRequestType>({
      query: (requestData: RegisterRequestType) => ({
        url: 'auth/register',
        method: 'POST',
        body: requestData,
      }),
    }),

    login: builder.mutation<LoginResponseType, LoginRequestType>({
      query: (requestData: LoginRequestType) => ({
        url: 'auth/login',
        method: 'POST',
        body: requestData,
        invalidatesTags: ['authMe'],
      }),
      onQueryStarted: async ({}: any, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled

          dispatch(authApi.util.upsertQueryData('authMe', 'auth', data))
        } catch (e) {
          return
        }
      },
    }),

    authMe: builder.query<AuthMeResponseType, AuthMeRequestType>({
      query: () => ({
        url: 'auth/me',
        method: 'POST',
      }),
      providesTags: ['authMe'],
    }),

    authMeUpdate: builder.mutation<UpdateResponseType, UpdateRequestType>({
      query: (requestData: UpdateRequestType) => ({
        url: 'auth/me',
        method: 'put',
        body: requestData,
        invalidatesTags: ['authMe'],
      }),

      onQueryStarted: async ({}: any, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled

          dispatch(authApi.util.upsertQueryData('authMe', 'auth', data.updatedUser))
        } catch (e) {
          return
        }
      },
    }),

    authMeLogOut: builder.mutation<LogOutResponseType, LogOutRequestType>({
      query: () => ({
        url: 'auth/me',
        method: 'DELETE',
      }),
      invalidatesTags: ['authMe'],
    }),

    requestPasswordReset: builder.mutation<PasswordResetResponseType, PasswordResetRequestType>({
      query: (requestData: PasswordResetRequestType) => ({
        url: 'auth/forgot',
        method: 'POST',
        body: {
          email: requestData.email,
          message:
            'password recovery link: <a href="http://localhost:5173/#/auth/set-new-password/$token$">link</a>',
        },
      }),
    }),

    setNewPassword: builder.mutation<SetNewPasswordResponseType, SetNewPasswordRequestType>({
      query: (requestData: SetNewPasswordRequestType) => ({
        url: 'auth/set-new-password',
        method: 'POST',
        body: requestData,
      }),
    }),
  }),
  overrideExisting: false,
})

export const {
  useRegisterMutation,
  useLoginMutation,
  useAuthMeQuery,
  useLazyAuthMeQuery,
  useAuthMeUpdateMutation,
  useAuthMeLogOutMutation,
  useRequestPasswordResetMutation,
  useSetNewPasswordMutation,
} = authApi
