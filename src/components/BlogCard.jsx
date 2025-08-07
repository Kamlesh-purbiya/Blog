import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  return (
    <Card className="mb-3 shadow">
      <Card.Body>
        <Card.Title>{blog.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">By {blog.author}</Card.Subtitle>
        <Card.Text>{blog.content.substring(0, 120)}...</Card.Text>
        <Button as={Link} to={`/blog/${blog.id}`} variant="primary">Read More</Button>
      </Card.Body>
    </Card>
  );
};

export default BlogCard;
