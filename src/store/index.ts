import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './reducers/carrinhoSlice'
import favoritoReducer from './reducers/favoritoSlice'
import { api } from '../services/api'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favoritos: favoritoReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
