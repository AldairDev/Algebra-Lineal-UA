import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './pages/Home';
import TeoriaNumeros from './pages/TeoriaNumeros';
import Congruencias from './pages/Congruencias';
import ModelosComputadoras from './pages/ModelosComputadoras';
import NumerosPrimos from './pages/NumerosPrimos';
import TopologiaComputacional from './pages/TopologiaComputacional';
import TeoriaComplejidad from './pages/TeoriaComplejidad';

export default function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <div style={{ display: 'flex', flexGrow: 1 }}>
          <Sidebar />
          <div style={{ flexGrow: 1, padding: '20px' }}>
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/teoria-numeros" element={<TeoriaNumeros />} />
                <Route path="/congruencias" element={<Congruencias />} />
                <Route path="/modelos-computadoras" element={<ModelosComputadoras />} />
                <Route path="/numeros-primos" element={<NumerosPrimos />} />
                <Route path="/topologia-computacional" element={<TopologiaComputacional />} />
                <Route path="/teoria-complejidad" element={<TeoriaComplejidad />} />
              </Routes>
            </main>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}