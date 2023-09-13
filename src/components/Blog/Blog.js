import React, { useState } from 'react';
import {
  Section,
  BlogContainer,
  BlogPost,
  BlogImage,
  BlogTitle,
  BlogExcerpt,
  ReadMore,
  BlogExcerptContainer,
} from './Blog.styles';
import BlogData from '../../data/blogData';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [expandedPost, setExpandedPost] = useState(null);

  const togglePost = (postId) => {
    if (expandedPost === postId) {
      setExpandedPost(null);
    } else {
      setExpandedPost(postId);
    }
  };

  return (
    <Section id="blog">
      <h2>Blog</h2>
      <BlogContainer>
        {BlogData.map((post) => (
          <BlogPost key={post.id}>
            <BlogImage src={require(`../../assets/images/${post.image}`)} alt={post.title} />
            <BlogTitle>{post.title}</BlogTitle>
            <BlogExcerptContainer>
              <BlogExcerpt>{post.excerpt}</BlogExcerpt>
              <Link to={`/blog/${post.id}`}>
                <ReadMore
                  onClick={() => togglePost(post.id)}
                  aria-expanded={expandedPost === post.id}
                  aria-controls={`blog-post-${post.id}`}
                >
                  {expandedPost === post.id ? 'Read Less' : 'Read More'}
                </ReadMore>
              </Link>
            </BlogExcerptContainer>
            {expandedPost === post.id && (
              <div id={`blog-post-${post.id}`}>
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
                <button onClick={() => togglePost(post.id)}>Read Less</button>
              </div>
            )}
          </BlogPost>
        ))}
      </BlogContainer>
    </Section>
  );
};

export default Blog;
