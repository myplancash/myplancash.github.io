import React from 'react';
import {Container, Title, Author, Content} from './BlogPostDetail.styles';

const BlogPostDetail = ({ title, content }) => {
  console.log(title, content)
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

export default BlogPostDetail;
