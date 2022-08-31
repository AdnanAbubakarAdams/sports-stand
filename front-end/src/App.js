import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar/Navbar';

// PAGES 
import Index from './pages/Index';
import New from './pages/New';
import Show from './pages/Show';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/players" element={<Index />} />
        <Route path="/players/new" element={<New/>} />
        <Route path="/players/:id" element={<Show/>} />
      </Routes>
    </Router>
  );
}

export default App;
