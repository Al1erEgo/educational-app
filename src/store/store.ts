import { configureStore } from '@reduxjs/toolkit'

import { rootApi } from './root-api'

export const store = configureStore({
  reducer: {
    [rootApi.reducerPath]: rootApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(rootApi.middleware),
})

// @ts-ignore
window.store = store
