import React, { useEffect, useState, useContext } from 'react';
import './Viewcart.css';
import { cartContext } from '../App';

const Viewcart = () => {
  const { cart } = useContext(cartContext); // Destructure directly from context

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cart.reduce((acc, cv) => acc + parseFloat(cv.price), 0)); // Use parseFloat for price calculation
  }, [cart]);

  return (
    <>
      <h1>Cart Products</h1>
      <div className='cart-container'>
        {cart.map((product) => (
          <div className='cart-product' key={product.id}>
            <div className='img'>
              <img src={product.url} alt={product.name} /> {/* Improved alt text */}
            </div>
            <div className='cart-details'>
              <h3>{product.name}</h3>
              <h4>Price: Rs. {product.price}.00</h4>
            </div>
          </div>
        ))}
      </div>
      
      <h2 className='total-price'>Total Price: Rs. {total.toFixed(2)}</h2> {/* Ensure two decimal places */}
    </>
  );
};

export default Viewcart;
