import React from 'react';
import { NavLink } from "react-router-dom";
import SkipLink from '../SkipLink/SkipLink.jsx';
import './NavBar.css';

const NavBar = () => {
  return (
    <header className="navbar">
      <span className="name">Renate Roke</span>
      <nav>
        <ul role="list">
          <li><SkipLink /></li>
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