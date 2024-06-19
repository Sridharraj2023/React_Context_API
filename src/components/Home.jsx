import React, { useState } from 'react';
import data from '../assets/Product.json'; 
import Product from './Product';
import './Home.css';

const Home = () => {
  const [products] = useState(data);

  return (
    <div className='product-container'>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;

