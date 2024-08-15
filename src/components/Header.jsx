import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      {/* <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/new">Create Post</Link></li>
        </ul>
      </nav> */}
  
<body class="bg-blue-500">
	<nav class="relative px-4 py-4 flex justify-between items-center bg-white border-b-2 ">
		<a class="text-3xl font-bold leading-none" href="#">
		
            Blog Zupay
		</a>
{/* 
		<a class="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200" href="#">Sign In</a> */}
		<Link to="/new"><li class="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200" href="#">Create</li></Link>
	</nav>

</body>


    </header>
  );
}

export default Header;
