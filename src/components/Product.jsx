import React, { useContext } from 'react';
import './Product.css';
import { cartContext } from '../App';

const Product = ({ product }) => {
  const { cart, setCart } = useContext(cartContext);

  const addCart = () => {
    if (!cart.some((item) => item.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  const removeCart = () => {
    setCart(cart.filter((c) => c.id !== product.id));
  };

  return (
    <div className='product-container'>
      <div className='img'>
        <img src={product.url} alt={product.name} />
      </div>
      <div className='details'>
        <h3>{product.name}</h3>
        <p>Product Price Rs: {product.price}</p>
      </div>
      {cart.some((item) => item.id === product.id) ? (
        <button className='remove-from-cart' onClick={removeCart}>
          Remove from Cart
        </button>
      ) : (
        <button className='add-to-cart' onClick={addCart}>
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default Product;
