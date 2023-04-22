import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const rootApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,

    credentials: 'include',
  }),
  endpoints: () => ({}),
  reducerPath: 'cards',
  tagTypes: ['authMe', 'pack'],
})
