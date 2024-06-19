import React, { createContext, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Product from './components/Product'
import Viewcart from './components/Viewcart'
import Home from './components/Home'
import Header from './components/Header'
import './App.css'
import Button from 'react-bootstrap/Button'; // Ensure react-bootstrap is installed

export const cartContext = createContext();

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <cartContext.Provider value={{ cart, setCart }}>
      <BrowserRouter>
        <Header />
        <div className='container'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} /> {/* Added Product route */}
            <Route path="/viewcart" element={<Viewcart />} /> {/* Adjusted path to lowercase */}
          </Routes>
        </div>
      </BrowserRouter>
    </cartContext.Provider>
  )
}

export default App

