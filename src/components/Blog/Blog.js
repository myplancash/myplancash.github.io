import {useState} from 'react';
import {
  Section,
  BlogContainer,
  BlogPost,
  BlogImage,
  BlogTitle,
  BlogExcerpt,
  ReadMore,
  BlogExcerptContainer
} from './Blog.styles';
import BlogData from '../../data/blogData';

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
              <ReadMore to={`/blog/${post.id}`} onClick={() => togglePost(post.id)}>
                {expandedPost === post.id ? 'Read Less' : 'Read More'}
              </ReadMore>
            </BlogExcerptContainer>
            {expandedPost === post.id && (
              <div>
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
