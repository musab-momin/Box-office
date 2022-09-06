import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavList, LinkStyled } from './Navbar.Styled';

const LINKS = [
  { to: '/', text: 'Home' },
  { to: '/saved', text: 'Saved' },
];
const Navbar = () => {
  const currentLocation = useLocation();

  return (
    <div>
      <NavList>
        {LINKS.map(item => (
          <li key={item.text}>
            <LinkStyled
              to={item.to}
              className={currentLocation.pathname === item.to ? 'active' : ''}
            >
              {item.text}
            </LinkStyled>
          </li>
        ))}
      </NavList>
    </div>
  );
};

export default Navbar;
