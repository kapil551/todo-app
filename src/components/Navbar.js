import React from 'react';

import { auth } from '../firebase/firebase.utils'; 

const Navbar = ({ currentUser }) => {
  return (
    <div className='bg-[#597EF7] p-3 text-white flex flex-row-reverse'>
        { 
          currentUser ?
            <button className='cursor-pointer pr-1 font-bold' onClick={() => auth.signOut()}>Log Out</button> 
            : <button className='cursor-pointer pr-1 font-bold'>Log In</button> 
        }
    </div>
  )
}

export default Navbar