import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AppRoutes } from './routes/AppRoutes';


function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Header />
        <main className="app-main">
          <div className="app-container">
            <AppRoutes />
          </div>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;