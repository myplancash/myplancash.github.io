 // NavItems.js
import React from 'react';
import { NavLink } from './NavItems.styles'

export const NavItem = ({ to, children }) => (
  <NavLink to={to}>
    {children}
  </NavLink>
);

// Define your navigation items here
export const NAV_ITEMS = [
  { to: '/', label: 'About Me' },
  { to: '/projects', label: 'Projects' },
  { to: '/skills', label: 'Skills' },
  { to: '/contact', label: 'Contact' },
  { to: '/blog', label: 'Blog' },
];
