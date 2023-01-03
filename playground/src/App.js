import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/Home';
import IMCPage from './pages/IMC';
import AgePage from './pages/Age';
import ClockPage from './pages/Clock';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <Router>{/*facilita el enrutamiento de las páginas*/}
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />{/*especificando la ruta de cada página*/}
        <Route path="/imc" element={<IMCPage />} />
        <Route path="/age" element={<AgePage />} />
        <Route path="/clock" element={<ClockPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
