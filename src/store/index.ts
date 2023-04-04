import { configureStore } from '@reduxjs/toolkit'

import { rootAPI } from './rootAPI'

export const store = configureStore({
  reducer: {
    [rootAPI.reducerPath]: rootAPI.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(rootAPI.middleware),
})
