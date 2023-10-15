import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { Container, Title, Author, Content } from './BlogPostDetail.styles';

const BlogPostDetail = ({ title, content }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Author>Written by John Doe on September 8, 2023</Author>
      <Content>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </Content>
    </Container>
  );
};

// Define prop type validation for the title and content props
BlogPostDetail.propTypes = {
  title: PropTypes.string.isRequired, // Ensure 'title' is a required string prop
  content: PropTypes.string.isRequired, // Ensure 'content' is a required string prop
};

export default BlogPostDetail;
