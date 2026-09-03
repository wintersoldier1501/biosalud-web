import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Booking from './pages/Booking';
import About from './pages/About';
import Methodology from './pages/Methodology';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <div className="announcement-bar">
          <a href="https://www.instagram.com/alemarianutricion?igsi=cXZkYnhpczlyZnJh" target="_blank" rel="noopener noreferrer" className="announcement-content">
            <span>SÍGUEME EN INSTAGRAM PARA TIPS Y RECORRIDOS EN EL SÚPER DIARIOS 🛒 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; SÍGUEME EN INSTAGRAM PARA TIPS Y RECORRIDOS EN EL SÚPER DIARIOS 🛒 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span>SÍGUEME EN INSTAGRAM PARA TIPS Y RECORRIDOS EN EL SÚPER DIARIOS 🛒 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; SÍGUEME EN INSTAGRAM PARA TIPS Y RECORRIDOS EN EL SÚPER DIARIOS 🛒 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          </a>
        </div>
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/agendar" element={<Booking />} />
            <Route path="/sobre-mi" element={<About />} />
            <Route path="/metodologia" element={<Methodology />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
