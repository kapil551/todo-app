import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { auth } from '../firebase/firebase.utils'; 

const Navbar = ({ currentUser }) => {

  const navigate = useNavigate();
  useEffect(
    () => {

      if(currentUser === null) {
        navigate('/');
      }

    }, [currentUser]
  )

  return (
    <div className='bg-[#597EF7] p-3 text-white flex flex-row-reverse'>
        { 
          currentUser &&
            <Link  to="/" className='cursor-pointer pr-1 font-bold' onClick={() => auth.signOut()}>Log Out</Link> 
        }
    </div>
  )
}

export default Navbar