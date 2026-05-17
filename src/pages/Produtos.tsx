import { useEffect, useState } from 'react'
import { Produto } from '../types/Produto'
import { ProductCard } from '../components/ProductCard'
import './Produtos.css'

export const Produtos = () => {
  const [produtos, setProdutos] = useState<Produto[]>([])
  const [loading, setLoading] = useState(true)
  const [erro, setErro] = useState<string | null>(null)

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await fetch('/produtos.json')
        if (!response.ok) throw new Error('Erro ao buscar dados')
        const json = await response.json()
        const data: Produto[] = json.produtos
        setProdutos(data)
      } catch (err: any) {
        setErro(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProdutos()
  }, [])

  if (loading) return <p>Carregando produtos...</p>
  if (erro) return <p>Ops! Algo deu errado: {erro}</p>

  return (
    <section className="produtos-page">
      <div className="produtos-header">
        <h1>Nosso Catálogo</h1>
        <p>Encontre os melhores produtos tecnológicos</p>
      </div>
      <div className="produto-grid">
        {produtos.map(p => (
          <ProductCard key={p.id} produto={p} />
        ))}
      </div>
    </section>
  )
}