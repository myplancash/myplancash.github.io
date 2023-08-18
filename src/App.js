import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import { Container, Navbar, NavItem, MainContent } from './App.styles'
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <Router>
      <Container>
        <Navbar>
          <NavItem to="/" activeClassName="active">
            About Me
          </NavItem>
          <NavItem to="/projects" activeClassName="active">
            Projects
          </NavItem>
          <NavItem to="/skills" activeClassName="active">
            Skills
          </NavItem>
          <NavItem to="/contact" activeClassName="active">
            Contact
          </NavItem>
        </Navbar>
        <MainContent>
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </MainContent>
      </Container>
    </Router>
  );
}

export default App;