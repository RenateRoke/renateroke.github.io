import React from 'react';
import { NavLink } from "react-router-dom";
import './NavBar.css';

const NavBar = () => {
  return (
    <header className="navbar">
      <div className="name">Renate Roke</div>
      <nav>
        <ul role="list">
          <li><a href="#content">Direct naar content</a></li>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/overmij">Over mij</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><a href="/rpg">RPG</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;