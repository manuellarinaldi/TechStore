import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCategorias } from '../services/api'
import './Categorias.css'

export const Categorias = () => {
  const [categorias, setCategorias] = useState<string[]>([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState<string | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    const carregar = async () => {
      try {
        const lista = await getCategorias()
        setCategorias(lista)
      } catch (e) {
        setErro('Erro ao carregar categorias.')
      } finally {
        setCarregando(false)
      }
    }
    carregar()
  }, [])

  if (carregando) return <p>Carregando...</p>
  if (erro) return <p>{erro}</p>

  return (
    <section className="categories-page">
      <div className="categories-header">
        <h1>Categorias de Tecnologia</h1>
        <p>Explore produtos por categoria</p>
      </div>
      <div className="categories-grid">
        {categorias.map((cat) => (
          <div
            key={cat}
            onClick={() => navigate(`/categorias/${encodeURIComponent(cat)}`)}
            style={{
              backgroundColor: '#0f1729',
              color: '#fff',
              borderRadius: '12px',
              padding: '32px',
              textAlign: 'center',
              cursor: 'pointer',
              fontSize: '18px',
              fontWeight: 'bold'
            }}
          >
            {cat}
          </div>
        ))}
      </div>
    </section>
  )
}