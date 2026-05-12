import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { UIProvider } from './contexts/UIContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import ArticleDetail from './pages/ArticleDetail';
import CategoryPage from './pages/CategoryPage';
import Contact from './pages/Contact';
import Analyses from './pages/Analyses';
import Dossiers from './pages/Dossiers';
import Reportages from './pages/Reportages';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <UIProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-white dark:bg-[#0f1117] transition-colors duration-300">
          <Navbar />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/article/:slug" element={<ArticleDetail />} />
              <Route path="/category/:slug" element={<CategoryPage />} />
              <Route path="/analyses" element={<Analyses />} />
              <Route path="/dossiers" element={<Dossiers />} />
              <Route path="/reportages" element={<Reportages />} />
              <Route path="/contact" element={<Contact />} />
              
              {/* Fallback */}
              <Route path="*" element={<Home />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </UIProvider>
  );
}
