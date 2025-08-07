import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';

const CreateBlog = ({ blogs, setBlogs }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBlog = {
      id: Date.now(),
      title,
      content,
      author,
      date: new Date().toLocaleDateString(),
    };

    setBlogs([newBlog, ...blogs]);  // add new blog at the top
    navigate('/');
  };

  return (
    <Container className="mt-4">
      <h2>Create New Blog</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="title" className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter blog title"
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
            placeholder="Write your blog content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="author" className="mb-3">
          <Form.Label>Author</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="success" type="submit">
          Publish Blog
        </Button>
      </Form>
    </Container>
  );
};

export default CreateBlog;
