import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Post from './pages/Post';
import PostForm from './components/PostForm';
import UpdatePost from './components/PostUpdate';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:id" element={<Post />} />
        <Route path="/new" element={<PostForm />} />
        <Route path="posts/update/:id" element={<UpdatePost />} />
      </Routes> 
    </Router>
  );
}

export default App;
