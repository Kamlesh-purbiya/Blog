import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';

const BlogDetails = ({ blogs, setBlogs }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return (
      <Container className="mt-4">
        <h2>Blog not found</h2>
        <Button onClick={() => navigate('/')}>Go Back</Button>
      </Container>
    );
  }

  const handleDelete = () => {
    const confirm = window.confirm("Are you sure you want to delete this blog?");
    if (confirm) {
      const updatedBlogs = blogs.filter((b) => b.id !== blog.id);
      setBlogs(updatedBlogs);
      navigate('/');
    }
  };

  return (
    <Container className="mt-4">
      <h2>{blog.title}</h2>
      <p className="text-muted">By {blog.author} | {blog.date}</p>
      <p>{blog.content}</p>

      <div className="mt-3">
        <Button variant="primary" as={Link} to={`/edit/${blog.id}`} className="me-2">
          Edit
        </Button>
        <Button variant="danger" onClick={handleDelete}>
          Delete
        </Button>
      </div>
    </Container>
  );
};

export default BlogDetails;
