import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';

const EditBlog = ({ blogs, setBlogs }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const blogToEdit = blogs.find((b) => b.id === parseInt(id));

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    if (blogToEdit) {
      setTitle(blogToEdit.title);
      setContent(blogToEdit.content);
      setAuthor(blogToEdit.author);
    }
  }, [blogToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedBlog = {
      ...blogToEdit,
      title,
      content,
      author,
    };

    const updatedBlogs = blogs.map((b) => (b.id === updatedBlog.id ? updatedBlog : b));
    setBlogs(updatedBlogs);
    navigate('/');
  };

  if (!blogToEdit) {
    return (
      <Container className="mt-4">
        <h2>Blog not found</h2>
        <Button onClick={() => navigate('/')}>Go Back</Button>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <h2>Edit Blog</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="title" className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="content" className="mb-3">
          <Form.Label>Content</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="author" className="mb-3">
          <Form.Label>Author</Form.Label>
          <Form.Control
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="success" type="submit">Update Blog</Button>
      </Form>
    </Container>
  );
};

export default EditBlog;
