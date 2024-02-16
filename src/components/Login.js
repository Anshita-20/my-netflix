import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

  return (
    <div>
        <Header />
        <div className='absolute'>
            <img
            src = "https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_small.jpg"
            alt="background"
            />
        </div>
        <form className='absolute w-3/12 p-12 bg-black my-36 mx-auto left-0 right-0 text-white bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            <input
            type="text"
            placeholder='Email Address'
            className='p-4 my-4 border w-full bg-gray-600'
            />
            {!isSignInForm && (
                 <input
                 type="text"
                 placeholder='Full name'
                 className='p-4 my-4 border w-full bg-gray-600'
                 />
            )}
            <input
            type='password'
            placeholder='Password'
            className='p-4 my-4 w-full bg-gray-600'
            />
            <button type='submit' className='p-4 my-4 bg-red-700 w-full rounded-lg'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered?"}</p>
        </form>
    </div>
  )
}

export default Login