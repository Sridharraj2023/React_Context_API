import React, { useState, useContext } from 'react';
import './Product.css';
import { cartContext } from '../App';

const Product = ({ product }) => {
  const { cart, setCart } = useContext(cartContext);
  const [count, setCount] = useState(0); // State to track product count

  // Find initial count if product already exists in cart
  useState(() => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCount(existingItem.count);
    }
  }, [cart, product.id]);

  const addToCart = () => {
    const updatedCart = [...cart];
    const existingItemIndex = updatedCart.findIndex((item) => item.id === product.id);

    if (existingItemIndex !== -1) {
      // If item already exists in cart, increment count
      updatedCart[existingItemIndex].count += 1;
    } else {
      // If item is not in cart, add with count 1
      updatedCart.push({ ...product, count: 1 });
    }

    setCart(updatedCart);
    setCount(count + 1); // Increment count
  };

  const removeFromCart = () => {
    if (count > 0) {
      const updatedCart = [...cart];
      const existingItemIndex = updatedCart.findIndex((item) => item.id === product.id);

      if (existingItemIndex !== -1) {
        // Decrement count if item exists in cart and count > 0
        updatedCart[existingItemIndex].count -= 1;
        setCart(updatedCart);
        setCount(count - 1); // Decrement count
      }
    }
  };

  const calculateTotalPrice = () => {
    return product.price * count;
  };

  return (
    <div className='product-container'>
      <div className='img'>
        <img src={product.url} alt={product.name} />
      </div>
      <div className='details'>
        <h3>{product.name}</h3>
        <p>Product Price Rs: {product.price}</p>
        <div className='quantity-control'>
          <button className='quantity-btn' onClick={removeFromCart}>-</button>
          <span className='quantity'>{count}</span>
          <button className='quantity-btn' onClick={addToCart}>+</button>
        </div>
        <p>Total Price Rs: {calculateTotalPrice()}</p>
      </div>
      {count > 0 && (
        <button className='remove-from-cart' onClick={() => removeFromCart()}>
          Remove from Cart
        </button>
      )}
    </div>
  );
};

export default Product;


