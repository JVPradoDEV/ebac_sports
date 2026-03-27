import { Produto } from '../../App'
import * as S from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { adicionarAoCarrinho } from '../../store/reducers/carrinhoSlice'
import { RootState } from '../../store'
import {
  adicionarFavorito,
  removerFavorito
} from '../../store/reducers/favoritoSlice'

type Props = {
  produto: Produto
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(valor)

const ProdutoComponent = ({ produto }: Props) => {
  const dispatch = useDispatch()
  const favoritos = useSelector((state: RootState) => state.favoritos.itens)
  const estaNosFavoritos = favoritos.some((item) => item.id === produto.id)
  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>

      <S.BtnComprar
        onClick={() =>
          estaNosFavoritos
            ? dispatch(removerFavorito(produto.id))
            : dispatch(adicionarFavorito(produto))
        }
        type="button"
      >
        {estaNosFavoritos
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>

      <S.BtnComprar
        onClick={() => dispatch(adicionarAoCarrinho(produto))}
        type="button"
      >
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
