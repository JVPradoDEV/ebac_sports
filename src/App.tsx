import Header from './components/Header'
import Produtos from './containers/Produtos'
import { useGetProdutosQuery } from './services/api'
import { GlobalStyle } from './styles'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const { data: produtos = [], isLoading } = useGetProdutosQuery()
  if (isLoading) {
    return <p> Carregando ... </p>
  }

  return (
    <>
      {' '}
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos produtos={produtos} />
      </div>
    </>
  )
}

export default App
