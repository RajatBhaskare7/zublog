import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function PostForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://blog-app-backend-fx8j.onrender.com/posts', { title, content })
      .then(() => navigate('/'))
      .catch(error => console.error('Error creating post:', error));
  };

  return (
    // <form >
    //   <h1>Create New Post</h1>
    //   <div>
    //     <label>Title</label>
    //     <input
    //       type="text"
    //       value={title}
    //       onChange={(e) => setTitle(e.target.value)}
    //       required
    //     />
    //   </div>
    //   <div>
    //     <label>Content</label>
    //     <textarea
    //       value={content}
    //       onChange={(e) => setContent(e.target.value)}
    //       required
    //     />
    //   </div>
    //   <button type="submit">Create Post</button>
    // </form>
    <>
    <div class="bg-[#ECEAEE] min-h-screen flex items-center">
   <div class="w-full">
     <h2 class="text-center text-blue-400 font-bold text-2xl uppercase mb-10">Create post</h2>
     <div class="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
       <form onSubmit={handleSubmit}>
         <div class="mb-5">
           <label for="name" class="block mb-2 font-bold text-gray-600">Title</label>
           <input type="text" id="name"
           value={title}
           required
                 onChange={(e) => setTitle(e.target.value)}
           name="name" placeholder="Enter Title" class="border border-gray-300 shadow p-3 w-full rounded mb-"/>
         </div>

         <div class="mb-5">
           <label for="twitter" class="block mb-2 font-bold text-gray-600">Content</label>
           <textarea
             value={content}
                   onChange={(e) => setContent(e.target.value)}
           type="text-area" id="twitter" name="twitter" placeholder="Enter Content." required class="border shadow p-3 w-full rounded mb-"/>
        
         </div>

         <button class="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg">Submit</button>
       </form>
     </div>
   </div>
 </div>

    </>
  );
}

export default PostForm;
