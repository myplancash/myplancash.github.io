import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { NavLink } from './NavItems.styles';

export const NavItem = ({ to, children }) => (
  <NavLink to={to}>{children}</NavLink>
);

// Define prop type validation for your compo
NavItem.propTypes = {
  to: PropTypes.string.isRequired, // Ensure 'to' is a required string prop
  children: PropTypes.node.isRequired, // Ensure 'children' is a required node prop
};

// Define your navigation items here
export const NAV_ITEMS = [
  { to: '/', label: 'About Me' },
  { to: '/projects', label: 'Projects' },
  { to: '/skills', label: 'Skills' },
  { to: '/contact', label: 'Contact' },
  { to: '/blog', label: 'Blog' },
];
