import React from 'react'
import {Routes, Route} from "react-router-dom";
import './App.css';
import Basket from './components/Basket/Basket';
import ProductsByCateg from './components/Categories/ProductsByCateg';
import Footer from './components/Footer/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar/Navbar'
import { ProductPage } from './components/Products/ProductPage';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/basket' element={<Basket />} />
        <Route path='/productpage/:id' element={<ProductPage />} />
        <Route path='/:name' element={<ProductsByCateg />} />
      </Routes>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default App;
