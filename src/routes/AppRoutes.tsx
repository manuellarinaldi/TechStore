import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Products } from '../pages/Products';
import { ProductDetail } from '../pages/ProductDetail';
import { Categories } from '../pages/Categories';
import { CategoryProducts } from '../pages/CategoryProducts';
import { About } from '../pages/About';
import { NotFound } from '../pages/NotFound';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produtos" element={<Products />} />
      <Route path="/produtos/:id" element={<ProductDetail />} />
      <Route path="/categorias" element={<Categories />} />
      <Route path="/categorias/:categoria" element={<CategoryProducts />} />
      <Route path="/sobre" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}