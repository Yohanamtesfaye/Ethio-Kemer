import React from 'react'
import mylogo from '../Images/Logo.jpg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
       <div className='fixed top-0 left-0 right-0 items-center p-2 flex-grow flex justify-between  bg-gray-700'  >
        <div  className="h-10 w-10 rounded-full bg-gray-500 Logo flex flex-col md:flex-row md:justify-center lg:justify-end mx-2   "><img src={mylogo} alt="" /></div>
        <div  className='mx-2'>
          <Link to='/' className="mr-10 text-white hover:text-gray-900">Home</Link>
          <Link to='/login' className="mr-10 text-white hover:text-gray-900">VIP</Link>
          <Link to='/Login' className="mr-10 text-white hover:text-gray-900">Free tip</Link>
          <Link to='/signup ' className='text-white hover:text-gray-900'>Sign Up</Link>
          

          
          </div>
      </div>
    </div>
  )
}

export default Navbar