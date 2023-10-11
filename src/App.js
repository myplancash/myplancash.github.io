import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container, MainContent } from './App.styles'
import blogData from './data/blogData';


const LazyComponent = (importFunc) => {
  const Component = lazy(importFunc);
  return (props) => (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  )
}

const AboutMe = LazyComponent(() => import('./components/AboutMe/AboutMe'));
const Projects = LazyComponent(() => import('./components/Projects/Projects'));
const Skills = LazyComponent(() => import('./components/Skills/Skills'));
const Contact = LazyComponent(() => import('./components/Contact/Contact'));
const HeroBanner = LazyComponent(() => import('./components/HeroBanner/HeroBanner'));
const Blog = LazyComponent(() => import('./components/Blog/Blog'));
const BlogPostDetail = LazyComponent(() => import('./components/BlogPostDetail/BlogPostDetail'));
const Footer = LazyComponent(() => import('./components/Footer/Footer'));


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
        <Footer />
      </Container>
    </Router>
  );
}

export default App;