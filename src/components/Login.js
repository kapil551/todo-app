import React, { useEffect } from 'react'

// import the svg file as a ReactComponent
import { ReactComponent as LoginImage } from '../images/login.svg';

import { FcGoogle } from 'react-icons/fc';

import { signInWithGoogle } from '../firebase/firebase.utils';
import { useNavigate } from 'react-router-dom';

const Login = ({ currentUser }) => {
    
    const navigate = useNavigate();

    // console.log(currentUser);

    useEffect(
        () => {

            if(currentUser) {
                navigate('/dashboard', { replace: false });
            }

        }, [currentUser]
    )
    
    const handleGoogleSignIn = () => {

        signInWithGoogle();
    }

  return (
    <main className='w-screen h-screen flex'>

        <section className='bg-green-200 w-[50vw] flex items-center justify-center'>

            <div className='bg-blue-200 flex flex-col items-center justify-center w-5/6 m-auto p-1 space-y-10'>
                <h1 className='text-xl font-bold'> LOGIN </h1>
                <p className='text-[#3F3D56] text-center text-sm'> 
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam consequuntur praesentium ut nam consequatur voluptatem iure quod hic vel doloremque!
                </p>

                <button className='bg-[#597EF7] flex items-center justify-center rounded-sm py-1' onClick={() => handleGoogleSignIn()}>
                    <FcGoogle className='bg-white h-8 w-8 rounded-sm ml-1 p-1'/>
                    <div className='text-white mx-4'> Sign in using Google </div>
                </button>
            </div>
        </section>

        <section className='bg-red-200 w-[50vw] relative p-1 flex items-center justify-center'>
            <LoginImage className='w-full bg-blue-200'/>
        </section>
        
    </main>
  )
}

export default Login