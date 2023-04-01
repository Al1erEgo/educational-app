import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

export const authApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL, // 'http://localhost:7542/2.0'
    credentials: 'include',
  }),

  reducerPath: 'auth',
  tagTypes: [],
  endpoints: builder => ({
    register: builder.mutation<any, any>({
      query: userData => ({
        url: '/register',
        method: 'POST',
        body: userData,
      }),
    }),

    login: builder.mutation<any, any>({
      query: userData => ({
        url: '/login',
        method: 'POST',
        body: userData,
      }),
    }),

    authMe: builder.query({
      query: () => '/me',
    }),

    authMeUpdate: builder.mutation<any, any>({
      query: userData => ({
        url: '/me',
        method: 'put',
        body: userData,
      }),
    }),

    authMeLogOut: builder.mutation<any, any>({
      query: () => ({
        url: '/me',
        method: 'DELETE',
      }),
    }),

    requestPasswordReset: builder.mutation<any, any>({
      query: email => ({
        url: '/forgot',
        method: 'POST',
        body: email,
      }),
    }),

    setNewPassword: builder.mutation<any, any>({
      query: resetData => ({
        url: '/set-new-password',
        method: 'POST',
        body: resetData,
      }),
    }),

    //Будем ли оставлять данный эндпоинт?
    block: builder.mutation<any, any>({
      query: data => ({
        url: '/block',
        method: 'POST',
        body: data,
      }),
    }),
  }),
})

export const {
  /* useRegisterMutation,
  useLoginMutation,
  useAuthMeQuery,
  useAuthMeUpdateMutation,
  useAuthMeLogOutMutation,
  useRequestPasswordResetMutation,
  useSetNewPasswordMutation,
  useBlockMutation,*/
} = authApi
