import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';
import {
  BlogPost,
  BlogContainer,
  BlogImage,
  BlogTitle,
  ReadMore,
} from './Blog.styles';


const apiUrl = 'http://localhost:1337/blog-posts'; // Update the API endpoint
const apiToken = 'c652d444edc856db2a5b1251afdc959cca86109bf5602940e7ef9bc359ad26817718b7db127a325e980331254c3a4ee83ebbbe7c16d960dd4a3a6333b448c85a9b98f7e1fed4fdcb798304f7b02d22231f108293ac3ce99480020f4e9600bc6b52b7578e1defae630f28cdcc2e3455d4f38f72426d0c8ecef189f50cf8229165';

const Blog = () => {
  const [blogData, setBlogData] = useState([]);
  const [expandedPost, setExpandedPost] = useState(null);

  useEffect(() => {
    axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${apiToken}`,
      },
    })
      .then((response) => {
        setBlogData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  

  const togglePost = (postId) => {
    setExpandedPost((prevState) => (prevState === postId ? null : postId));
  };

  return (
    <BlogContainer>
      <h2>Blog</h2>
      {blogData.map((post) => (
        <BlogPost key={post.id}>
          <Link to={`/blog/${post.id}`}>
            <BlogTitle>{post.title}</BlogTitle>
            <BlogImage src={require(`../../assets/images/${post.image}`)} alt={post.title} />
          </Link>
          <ReadMore onClick={() => togglePost(post.id)} expanded={expandedPost === post.id}>
            {expandedPost === post.id ? 'Read Less' : 'Read More'}
          </ReadMore>
          {expandedPost === post.id && (
            <div id={`blog-post-${post.id}`}>
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
              <button onClick={() => togglePost(post.id)}>Read Less</button>
            </div>
          )}
        </BlogPost>
      ))}
    </BlogContainer>
  );
};


export default Blog;
