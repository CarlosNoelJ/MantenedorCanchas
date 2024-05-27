// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CanchaList from './components/CanchaList';
import TipoCanchaList from './components/tipoCanchas/TipoCanchaList';
// import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<CanchaList />} />
          <Route path="/canchas" element={<CanchaList />} />
          <Route path="/tipocanchas" element={<TipoCanchaList />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;