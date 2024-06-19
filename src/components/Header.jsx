import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../App'; // Ensure the import path is correct
import './Header.css'; // Ensure to import the CSS file

const Header = () => {
  const { cart } = useContext(cartContext);

  return (
    <header className="Navbar">
      <div className="logo">MyStore</div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li>
            <Link to="/viewcart">
              View Cart 
              <span className="cart-len">{cart.length}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
