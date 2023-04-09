import { combineReducers, configureStore } from '@reduxjs/toolkit'

import { rootApi } from './root-api'

const rootReducer = combineReducers({
  [rootApi.reducerPath]: rootApi.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(rootApi.middleware),
})

export type AppRootStateType = ReturnType<typeof rootReducer>
