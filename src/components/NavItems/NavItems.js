import React from 'react';
import { NavLink as StyledNavLink } from './NavItems.styles';
import { Link } from 'react-router-dom';

export const NavItem = ({ to, anchor, children }) => (
  to.startsWith('#') ? (
    <StyledNavLink 
      to={to} 
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
    >
      {children}
    </StyledNavLink>
  ) : (
    <Link to={to} onClick={() => scrollToAnchor(anchor)}>
      {children}
    </Link>
  )
);

export const scrollToAnchor = (anchor) => {
  if (anchor && anchor.startsWith('#')) {
    const targetId = anchor.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: 'smooth',
      });
    }
  }
};

// Define your navigation items here
export const NAV_ITEMS = [
  { to: '/', label: 'About Me', anchor: '#about' },
  { to: '/projects', label: 'Projects', anchor: '#projects' },
  { to: '/skills', label: 'Skills', anchor: '#skills' },
  { to: '/contact', label: 'Contact', anchor: '#contact' },
  { to: '/blog', label: 'Blog', anchor: '#blog' },
];
