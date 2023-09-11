import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, MainContent } from './App.styles'
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';

import HeroBanner from './components/HeroBanner/HeroBanner';
import Blog from './components/Blog/Blog';
import blogData from './data/blogData';
import BlogPostDetail from './components/BlogPostDetail/BlogPostDetail';

const App = () => {
  return (
    <Router>
      <Container>
        
        <HeroBanner />
        <MainContent>
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            {blogData.map((post) => (
              <Route
                key={post.id}
                path={`/blog/${post.id}`}
                element={<BlogPostDetail title={post.title} content={post.content} />}
              />
            ))}
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </MainContent>
      </Container>
    </Router>
  );
}

export default App;