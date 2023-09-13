import React from 'react';

const BlogPost = ({ title, image, content }) => {
  return (
    <div>
      <h2>{title}</h2>
      <img src={require(`../../assets/images/${image}`)} alt={title} />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default BlogPost;
