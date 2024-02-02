import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { Container, Title, Author } from './BlogPostDetail.styles';

const BlogPostDetail = ({ postId }) => {
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:1337/api/blog-posts/${postId}`)
    .then((response) => response.json())
    .then((data) => setPost(data))
    .catch((error) => console.error(error))
  }, [postId])

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Title>{post.title}</Title>
      <Author>Written by Sergio Esteban Torres on {post.date}, 2023</Author>
    </Container>
  );
};


BlogPostDetail.propTypes = {
  postId: PropTypes.string.isRequired,
};

export default BlogPostDetail;
