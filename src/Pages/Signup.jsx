import React from 'react'
import email from '../Images/email.png'
import person from '../Images/person.png'
import password from '../Images/password.png'
import football from '../Images/Football.jpg'

import { Link } from 'react-router-dom'
const Signup = () => {
  return (
    <div className='flex  items-center h-screen'>
      <div className=' mt-14 mt-14 hidden md:block'>
        <img src={football} alt="" style={{ width: '700px', height: '700px' }}  className="mt-4 w-full md:w-auto" />
      </div>
       {/* Input fields */}
      <div className='Form mt-44'>
      <form action="">
      <h1 className='text-mono font-bold text-4xl mb-4 ml-32 '>Sign Up</h1>
      {/* Name */}
      <div className="flex ml-32 ">
        <img src={person} alt=""  /> 
        <input type="text" placeholder='Your Name' className='pl-4 border border-black rounded-lg px-14 ml-4' />
      </div>
      {/* Email */}
      <div className="flex ml-32 mt-3">
        <img src={email} alt=""  />
        <input type="email"  placeholder='Email'  className='pl-4 border border-black rounded-lg px-14 ml-4'  />
      </div>
      {/* Password */}
      <div className="flex ml-32 mt-3">
        <img src={password} alt="" />
        <input type="password"  placeholder='Password'  className='pl-4 border border-black rounded-lg px-14 ml-4' />
    </div>
    <p className='ml-36 mt-5'>Already Have an account <Link className='text-blue-500' to='/login'>Log In</Link></p>
    {/* Buttons */}
    <div className="submit-container flex ml-36 mt-5">
      <div className="submit bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded mr-5 ml-14"> Sign Up</div>
      
    </div>
      </form>
      </div>
      

   
    </div>
  )
}

export default Signup