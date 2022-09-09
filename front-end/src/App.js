import React,{useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
// COMPONENTS
import Navbar from './components/NavBar/Navbar';
import Cart from './components/Stores/Cart';
import Stores from './components/Stores/Stores';
// import BasketBall from './components/BasketBall/BasketBall';

// PROVIDERS --->
import { UserProvider } from './Providers/UserProvider';

// PAGES 
import Edit from './pages/Edit';
import Index from './pages/Index';
import New from './pages/New';
import Show from './pages/Show';
import Leagues from './pages/Leagues';
import Standings from './pages/Standings';
import Nba from './pages/Nba';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import { LoginPage } from './pages/LoginPage';
import { LoggedInPage} from  './pages/LoggedInPage'


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
    <UserProvider>
    <Router>
      <Navbar cartNum={cart.length}/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/players" element={<Index />} />
        <Route path="/players/new" element={<New/>} />
        <Route path="/players/:id" element={<Show/>} />
        <Route path="/players/:id/edit" element={<Edit/>}/>
        <Route path="/leagues" element={<Leagues/>} />
        <Route path="/standings" element={<Standings/>} />
        <Route path="/nba" element={<Nba/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/loggedInPage" element={<LoggedInPage/>}/>
        <Route path="/stores" element={<Stores handleClick={handleClick}/>} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} handleChange={handleChange}/>} />

      </Routes>
      <Footer/>
    </Router>
    </UserProvider>
  );
}

export default App;
