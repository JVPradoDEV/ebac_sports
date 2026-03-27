import { Produto } from '../App'

import * as S from './styles'
import ProdutoComponent from '../components/Produto'

type Props = {
  produtos: Produto[]
}

const ProdutosComponent = ({ produtos }: Props) => {
  return (
    <>
      <S.Produtos>
        {produtos.map((produto) => (
          <ProdutoComponent key={produto.id} produto={produto} />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
