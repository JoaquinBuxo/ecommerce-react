import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to='/'>Products</NavLink>
        <NavLink to='/product'>Details</NavLink>
      </nav>
    </header>
  );
};

export default Header;
