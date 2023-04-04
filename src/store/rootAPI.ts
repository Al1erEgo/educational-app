import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const rootAPI = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://neko-back.herokuapp.com/2.0/', //import.meta.env.VITE_BASE_URL,
    credentials: 'include',
  }),
  endpoints: () => ({}),
  reducerPath: 'cards',
  tagTypes: [],
})
