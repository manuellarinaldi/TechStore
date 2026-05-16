import { useEffect, useState } from 'react'
import { Produto } from '../types'
import { CardProduto } from '../components/CardProduto'

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
    <section>
      <h2>Nosso Catálogo</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
        {produtos.map(p => (
          <CardProduto key={p.id} produto={p} />
        ))}
      </div>
    </section>
  )
}