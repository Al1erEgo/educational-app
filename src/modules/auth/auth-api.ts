import { rootApi } from '../../store/root-api'

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
      }),
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
      }),
      invalidatesTags: ['authMe'],
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
            'password recovery link: <a href="http://localhost:5173/#/set-new-password/$token$">link</a>',
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
  useAuthMeUpdateMutation,
  useAuthMeLogOutMutation,
  useRequestPasswordResetMutation,
  useSetNewPasswordMutation,
} = authApi

type RegisterRequestType = {
  email: string
  password: string
  'confirm password': string
}

type RegisterResponseType = {
  addedUser: {
    _id: string
    email: string
    rememberMe: boolean
    name: string
    publicCardPacksCount: number
    created: Date
    updated: Date
    isAdmin: boolean
    verified: boolean
    __v: number
  }
  error?: string
}

type LoginRequestType = {
  email: string
  password: string
  rememberMe: boolean
}

type LoginResponseType = {
  _id: string
  email: string
  rememberMe: boolean
  isAdmin: boolean
  name: string
  verified: boolean
  publicCardPacksCount: number
  created: Date
  updated: Date
  __v: number
  token: string
  tokenDeathTime: number
  avatar?: string
  error?: string
}

type AuthMeRequestType = void
type AuthMeResponseType = {
  _id: string
  email: string
  rememberMe: boolean
  name: string
  publicCardPacksCount: number
  created: Date
  updated: Date
  verified: boolean
  __v: number
  token: string
  tokenDeathTime: number
  error?: string
}

type UpdateRequestType = {
  name: string
  avatar?: string
}
type UpdateResponseType = {
  updatedUser: {
    _id: string
    email: string
    rememberMe: boolean
    isAdmin: boolean
    name: string
    verified: boolean
    publicCardPacksCount: number
    created: Date
    updated: Date
    __v: number
    token: string
    tokenDeathTime: number
    avatar?: string
  }
  token: string
  tokenDeathTime: number
  error?: string
}

type LogOutRequestType = {}
type LogOutResponseType = {
  info: string
  error?: string
}

type PasswordResetRequestType = {
  email: string
  /*message: string*/
}
type PasswordResetResponseType = {
  info: string
  success: boolean
  answer: string
  html: boolean
  error?: string
}

type SetNewPasswordRequestType = {
  password: string
  resetPasswordToken: string
}
type SetNewPasswordResponseType = {
  info: string
}

//применить утилитные типы omit, pick partial
