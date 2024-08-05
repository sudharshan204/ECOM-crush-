import React from "react";
import Home from './Components/Home/Home'
import Products from './Components/Products/Products'
import Nav from './Components/navbar/nav';
import Deals from './Components/Deals/Deals';
import Newarrival from './Components/NewArrival/Newarrival.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './Components/Cart/Cart.jsx';
import Footer from './Components/Fotter/Footer.jsx';
import LoginPage from './Components/Login/LoginPage.jsx';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/products' element={<Products/>}></Route>
          <Route path='/Deals' element={<Deals/>}></Route>
          <Route path='/Newarrival' element={<Newarrival/>}></Route>
          <Route path='/Cart' element={<Cart/>}></Route>
          <Route path='/LoginPage' element={<LoginPage/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>

    </div>
  );
};

export default App;
