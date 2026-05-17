import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Produto } from '../types/Produto'
import './Detalhes.css'

export const Detalhes = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [produto, setProduto] = useState<Produto | null>(null)
  const [loading, setLoading] = useState(true)
  const [erro, setErro] = useState<string | null>(null)

  useEffect(() => {
    const fetchProduto = async () => {
      try {
        const response = await fetch('/produtos.json')
        if (!response.ok) throw new Error('Produto não encontrado')
        const json = await response.json()
        const data: Produto[] = json.produtos
        const produtoEncontrado = data.find(p => p.id === parseInt(id || '0'))
        setProduto(produtoEncontrado || null)
      } catch (err: any) {
        setErro(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchProduto()
  }, [id])

  if (loading) return <p>Carregando detalhes...</p>
  if (erro) return <p>Erro: {erro}</p>

  return (
    <div className="detalhes-page">
      <button onClick={() => navigate('/produtos')}>← Voltar</button>
      {produto && (
        <>
          <img src={produto.imagem} alt={produto.nome} />
          <span className="detalhes-categoria">{produto.categoria}</span>
          <h1>{produto.nome}</h1>
          <p className="detalhes-preco">R$ {produto.preco.toFixed(2)}</p>
          <p className="detalhes-descricao">{produto.descricaoDetalhada}</p>
        </>
      )}
    </div>
  )
}