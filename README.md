# 🛒 TechStore — Catálogo de Produtos Tecnológicos

A TechStore simula um catálogo online de produtos de tecnologia (notebooks, celulares, tablets, periféricos, monitores, acessórios, smartwatches e componentes de computador), com navegação entre páginas, consumo de uma API via `fetch` e tipagem completa em TypeScript.


---

## 👥 Integrante
Manuella Rinaldi RM:567915

---

## 🚀 Links

- **Repositório GitHub:** https://github.com/manuellarinaldi/techstore
- **Deploy Vercel:** https://techstore-a8vj.vercel.app/


---

## 🧱 Tecnologias utilizadas

- **Vite** — bundler e dev server
- **React 18** — biblioteca de UI
- **TypeScript** — tipagem estática
- **React Router DOM v6** — roteamento SPA
- **Fetch API** — consumo da API
- **JSON Server** — API REST de desenvolvimento
- **Git + GitHub** — versionamento e colaboração
- **Vercel** — deploy contínuo
- **CSS puro** — estilização modular por componente

---

## 📦 Estrutura do projeto

```
techstore/
public/
produto.json         
logo.svg
├── src/
components/     
  Header.tsx
  Footer.tsx
  NavMenu.tsx
  ProductCard.tsx
  CategoryCard.tsx
  Loading.tsx
  ErrorMessage.tsx
  Button.tsx
pages/          
  Home.tsx
  Products.tsx
  ProductDetail.tsx
  Categories.tsx
  Categorias.tsx
  Detalhes.tsx
  Erro.tsx
  CategoryProducts.tsx
  About.tsx
  NotFound.tsx
routes/        
  AppRoutes.tsx
services/
  api.ts
styles/
  global.css
types/   
  index.ts       
  Product.ts
  Produto.ts
App.tsx
main.tsx
tsconfig*.json
package.json
vercel.json         
vite.config.ts
```

---


# 🛒 TechStore — Catálogo de Produtos Tecnológicos

## 📋 Descrição

A TechStore é uma aplicação web que simula um catálogo de produtos tecnológicos, desenvolvida como projeto avaliativo (CheckPoint 3).

A aplicação permite navegar por produtos como notebooks, celulares, tablets, periféricos, monitores, acessórios, smartwatches e componentes de computador.

---

## 👩‍💻 Integrantes

| Nome | RM | Responsabilidade |
|------|----|-----------------|
| Manuella Rinaldi | 567915 | Desenvolvimento completo da aplicação (Front-End, Rotas, API, Deploy) |

---

## 🚀 Tecnologias Utilizadas

- [Vite](https://vitejs.dev/)
- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Router DOM](https://reactrouter.com/)
- Fetch API
- Git e GitHub
- [Vercel](https://vercel.com/)

---

## ⚙️ Instalação

```bash
# Clone o repositório
git clone https://github.com/manuellarinaldi/techstore

# Entre na pasta do projeto
cd techstore

# Instale as dependências
npm install
```

---

## ▶️ Como executar localmente

```bash
npm run dev
```

Acesse: http://localhost:5173

---

## 🔗 Links

- 📁 Repositório GitHub: https://github.com/manuellarinaldi/techstore
- 🌐 Deploy na Vercel: https://techstore-a8vj.vercel.app/

---

## 📡 API Utilizada

A aplicação consome dados de um arquivo `produtos.json` servido estaticamente pela pasta `public/`. 

O arquivo contém um array de produtos com os campos: `id`, `nome`, `categoria`, `preco`, `imagem`, `descricaoCurta` e `descricaoDetalhada`.

O consumo é feito via `fetch` com `async/await`, tratamento de erro com `try/catch` e estados de carregamento.