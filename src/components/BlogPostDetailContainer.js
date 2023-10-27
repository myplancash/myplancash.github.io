// BlogPostDetailContainer.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BlogPostDetail from './BlogPostDetail'; // Import your BlogPostDetail component
import blogData from '../../data/blogData';

const BlogPostDetailContainer = () => {
  const { id } = useParams(); // Get the 'id' parameter from the URL
  const [blogPost, setBlogPost] = useState(null);

  useEffect(() => {
    // Find the blog post based on the 'id' parameter
    const post = blogData.find((post) => post.id === parseInt(id, 10));
    
    if (post) {
      setBlogPost(post);
    }
  }, [id]);

  // If the blog post is not found, you can handle it here (e.g., display a message)

  return (
    <div>
      {blogPost ? (
        <BlogPostDetail title={blogPost.title} content={blogPost.content} />
      ) : (
        <p>Blog post not found</p>
      )}
    </div>
  );
};

export default BlogPostDetailContainer;
