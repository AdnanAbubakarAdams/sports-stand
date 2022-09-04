import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// COMPONENTS
import Navbar from './components/NavBar/Navbar';
// import BasketBall from './components/BasketBall/BasketBall';

// PAGES 
import Edit from './pages/Edit';
import Index from './pages/Index';
import New from './pages/New';
import Show from './pages/Show';
import Leagues from './pages/Leagues';
import StoresIndex from './pages/StoresIndex';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/players" element={<Index />} />
        <Route path="/players/new" element={<New/>} />
        <Route path="/players/:id" element={<Show/>} />
        <Route path="/players/:id/edit" element={<Edit/>}/>
        {/* <Route path="/basketball" element={<BasketBall/>} /> */}
        <Route path="/leagues" element={<Leagues/>} />
        <Route path="/stores" element={<StoresIndex/>} />

      </Routes>
    </Router>
  );
}

export default App;
