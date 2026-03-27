import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritoState = {
  itens: Produto[]
}
const initialState: FavoritoState = {
  itens: [] as Produto[]
}
const favoritoSlice = createSlice({
  name: 'favorito',
  initialState,
  reducers: {
    adicionarFavorito(state, action: PayloadAction<Produto>) {
      state.itens.push(action.payload)
    },
    removerFavorito(state, action: PayloadAction<number>) {
      state.itens = state.itens.filter((item) => item.id !== action.payload)
    }
  }
})
export const { adicionarFavorito, removerFavorito } = favoritoSlice.actions
export default favoritoSlice.reducer
