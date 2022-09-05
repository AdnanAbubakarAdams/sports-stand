import React,{useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// COMPONENTS
import Navbar from './components/NavBar/Navbar';
import Cart from './components/Stores/Cart';
import Stores from './components/Stores/Stores';
// import BasketBall from './components/BasketBall/BasketBall';

// PAGES 
import Edit from './pages/Edit';
import Index from './pages/Index';
import New from './pages/New';
import Show from './pages/Show';
import Leagues from './pages/Leagues';
// import StoresIndex from './pages/StoresIndex';

function App() {
  const [cart, setCart] = useState([]);

  const handleClick = (product) => {
    if (cart.indexOf(product) !== -1) return;
    setCart([...cart, product])
  }

  const handleChange = (product, decrease) => {
    const index = cart.indexOf(product);
    const arr = cart;
    arr[index].quantity += decrease;

    if(arr[index].quantity === 0) arr[index].quantity = 1;
    setCart([...arr]);
}

  
  return (
    <Router>
      <Navbar cartNum={cart.length}/>
      <Routes>
        <Route path="/players" element={<Index />} />
        <Route path="/players/new" element={<New/>} />
        <Route path="/players/:id" element={<Show/>} />
        <Route path="/players/:id/edit" element={<Edit/>}/>
        <Route path="/leagues" element={<Leagues/>} />
        <Route path="/stores" element={<Stores handleClick={handleClick}/>} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} handleChange={handleChange}/>} />

      </Routes>
    </Router>
  );
}

export default App;
