import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { ReactLenis } from 'lenis/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Promo from './pages/Promo';
import Contact from './pages/Contact';
import Chatbot from './components/Chatbot';
import { LanguageProvider } from './i18n/LanguageContext';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <LanguageProvider>
        <Router>
          <ScrollToTop />
          <Navbar />
          <main className="flex-grow pt-[88px] pb-xxl">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/promo" element={<Promo />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <Chatbot />
        </Router>
      </LanguageProvider>
    </ReactLenis>
  );
}