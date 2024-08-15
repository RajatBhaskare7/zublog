import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Use `useNavigate` instead of `useHistory`
import axios from 'axios';

function PostList() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate(); // Initialize `useNavigate`
  const apiUrl = import.meta.env.VITE_API_URL; 
  console.log(apiUrl);
  useEffect(() => {
    axios.get(apiUrl+'https://blog-app-backend-fx8j.onrender.com/posts')
      .then(response => setPosts(response.data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://blog-app-backend-fx8j.onrender.com/posts/${id}`);
      setPosts(posts.filter(post => post._id !== id));
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  const handleUpdate = (id) => {
    navigate(`/posts/update/${id}`); // Use `navigate` instead of `history.push`
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Blog Posts</h1>
      <ul className="space-y-6">
        {posts.length === 0 && <p className='text-xl text-center '>No Blogs!  Create new blogs</p>}
        {
            posts.map(post => (
                <li key={post._id} className="bg-white shadow-md rounded-lg p-6 hover:bg-gray-50 transition duration-300 ease-in-out">
                  <Link to={`/posts/${post._id}`} className="text-2xl font-semibold text-blue-600 hover:underline">
                    {post.title}
                  </Link>
                  <div className="flex justify-end space-x-4 mt-4">
                    <button 
                      onClick={() => handleUpdate(post._id)} 
                      className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition duration-300 ease-in-out"
                    >
                      Update
                    </button>
                    <button 
                      onClick={() => handleDelete(post._id)} 
                      className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300 ease-in-out"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))
        }
      </ul>
    </div>
  );
}

export default PostList;
