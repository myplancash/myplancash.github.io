import React from 'react';
import PropTypes from 'prop-types';

const BlogPost = ({ title, image, content }) => {
  return (
    <div>
      <h2>{title}</h2>
      <img src={require(`../../assets/images/${image}`)} alt={title} />
      <div dangerouslySetInnerHTML={{ __html: content }} /> 
    </div>
  );
};

BlogPost.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default BlogPost;
