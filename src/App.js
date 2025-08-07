import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CreateBlog from './pages/CreateBlog';
import EditBlog from './pages/EditBlog';
import BlogDetails from './pages/BlogDetails';

function App() {
  const [blogs, setBlogs] = useState([]);

  // Load from localStorage on app load
  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    setBlogs(storedBlogs);
  }, []);

  // Save to localStorage whenever blogs change
  useEffect(() => {
    localStorage.setItem('blogs', JSON.stringify(blogs));
  }, [blogs]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home blogs={blogs} />} />
        <Route path="/create" element={<CreateBlog blogs={blogs} setBlogs={setBlogs} />} />
        <Route path="/blog/:id" element={<BlogDetails blogs={blogs} setBlogs={setBlogs} />} />
        <Route path="/edit/:id" element={<EditBlog blogs={blogs} setBlogs={setBlogs} />} />
      </Routes>
    </Router>
  );
}

export default App;
