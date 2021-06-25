import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => (
  <div>
    <Link to="/main">Main</Link>
    <Link to="/about">About</Link>
  </div>
);

export default Menu;
