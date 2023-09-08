import React from 'react';

const BlogPostDetail = ({ title, content }) => {
  console.log(title, content)
  return (
    <div>
      <h2>{title}</h2>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default BlogPostDetail;
