import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`https://blog-app-backend-fx8j.onrender.com/posts/${id}`)
      .then(response => setPost(response.data))
      .catch(error => console.error('Error fetching post:', error));
  }, [id]);

  if (!post) return <p className="text-center text-lg">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto p-6">
        {/* Header Image */}
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1472289065668-ce650ac443d2?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Header"
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Title and Metadata */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">{post.title}</h1>
          <div className="flex items-center text-gray-600">
            <span>Published on: 15-08-2024</span>
            <span className="mx-2">|</span>
            <span>By <span className="font-semibold text-gray-800">User</span></span>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none text-gray-700">
          <p>{post.content}</p>
        </div>

        {/* Author Info */}
             </div>
    </div>
  );
}

export default PostDetail;
