import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Data from './Components/Data';
import Header from './Components/Header';
import Products from './Components/Products';
import Cart from './Components/Cart';

function App() {

  const[cart, setCart] = useState([]);

  console.log(cart);

  const addtoCart = (data) =>{
    setCart([...cart,data]);
  }

  const removeItem = (id) => {
    const newCart  = cart.filter((item)=> item.id !== id);
    setCart(newCart);
  }   

  const clearItem = () => {
    setCart([]);
  }  

  return (
    <>
        <BrowserRouter>
              <Header totalItems={cart.length}/>
              <Routes>
                  <Route path="/" element={<Products data={Data} addtoCart={addtoCart} />} />
                  <Route path="/cart" element={<Cart cart={cart} removeItem={removeItem} clearItem={clearItem}/>} />
              </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
