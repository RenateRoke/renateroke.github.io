import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import SkipLink from '../SkipLink/SkipLink.jsx';
import './NavBar.css';

const NavBar = () => {
  const [shouldFocusHeading, setShouldFocusHeading] = useState(false);
  const location = useLocation();

  const handleClick = () => {
    setShouldFocusHeading(true);
  };

  useEffect(() => {
    if (!shouldFocusHeading) {
      return;
    }

    const timer = window.setTimeout(() => {
      const heading = document.querySelector('main h1');

      if (heading) {
        heading.setAttribute('tabindex', '-1');
        heading.focus();
      }

      setShouldFocusHeading(false);
    }, 0);

    return () => window.clearTimeout(timer);
  }, [location.pathname, shouldFocusHeading]);

  return (
    <header className="navbar">
      <span className="name">Renate Roke</span>
      <nav aria-label="Hoofdmenu">
        <ul role="list">
          <li><SkipLink /></li>
          <li><NavLink onClick={handleClick} to="/">Home</NavLink></li>
          <li><NavLink onClick={handleClick} to="/overmij">Over mij</NavLink></li>
          <li><NavLink onClick={handleClick} to="/contact">Contact</NavLink></li>
          <li><a href="/rpg">RPG</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;