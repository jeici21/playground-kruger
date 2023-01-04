import './App.scss';
import Navbar from './components/Navbar';
import HomePage from './pages/Homepage';
import IMCPage from './pages/IMCpage';
import AgePage from './pages/Agepage';
import ClockPage from './pages/Clockpage';
import AboutPage from './pages/Aboutpage';
import ContactPage from './pages/Contactpage';
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
