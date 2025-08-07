import React from 'react';
import { Container } from 'react-bootstrap';
import BlogCard from '../components/BlogCard';

const Home = ({ blogs }) => {
  return (
    <Container className="mt-4">
      <h2 className="mb-4">Latest Blogs</h2>
      {blogs.map(blog => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </Container>
  );
};

export default Home;
