import { configureStore } from '@reduxjs/toolkit'

import { authApi } from '../modules/auth/auth-api'

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(authApi.middleware),
})
