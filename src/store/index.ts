import { configureStore } from '@reduxjs/toolkit'

import { authApi } from '../modules/auth/auth-api'

import { rootAPI } from './rootAPI'

export const store = configureStore({
  reducer: {
    [rootAPI.reducerPath]: rootAPI.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(authApi.middleware),
})
