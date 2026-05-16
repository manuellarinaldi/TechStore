import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Produtos } from '../pages/Produtos';
import { Detalhes } from '../pages/Detalhes';
import { Categorias } from '../pages/Categorias';
import { CategoryProducts } from '../pages/CategoryProducts';
import { About } from '../pages/About';
import { NotFound } from '../pages/NotFound';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produtos" element={<Produtos />} />
      <Route path="/produtos/:id" element={<Detalhes />} />
      <Route path="/categorias" element={<Categorias  />} />
      <Route path="/categorias/:categoria" element={<CategoryProducts />} />
      <Route path="/sobre" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}