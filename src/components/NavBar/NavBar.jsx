import React from 'react';
import { NavLink } from "react-router-dom";
import { useRef } from 'react';
import SkipLink from '../SkipLink/SkipLink.jsx';
import './NavBar.css';

const NavBar = () => {
  const navRef = useRef(null);

  const handleClick = () => {
    setTimeout(() => {
      if (navRef.current) {
        navRef.current.focus();
      }
    }, 0);
  }

  return (
    <header tabindex="-1" ref={navRef} className="navbar">
      <span className="name">Renate Roke</span>
      <nav>
        <ul role="list">
          <li><SkipLink /></li>
          <li><NavLink onClick={handleClick} reloadDocument to="/">Home</NavLink></li>
          <li><NavLink onClick={handleClick} reloadDocument to="/overmij">Over mij</NavLink></li>
          <li><NavLink onClick={handleClick} reloadDocument to="/contact">Contact</NavLink></li>
          <li><a href="/rpg">RPG</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;