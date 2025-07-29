import React, { useState } from 'react';

const Login = () => {
  const [currentState, setCurrentState] = useState('Sign Up');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    // Handle login/signup here
  };

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>

      {/* Heading */}
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prate-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>

      {/* Name input only for Sign Up */}
      {currentState === 'Sign Up' &&(
        <input
          type='text'
          className='w-full px-3 py-2 border border-gray-800 rounded'
          placeholder='Name'
          required
        />
      )}

      <input
        type='email'
        className='w-full px-3 py-2 border border-gray-800 rounded'
        placeholder='Email'
        required
      />

      <input
        type='password'
        className='w-full px-3 py-2 border border-gray-800 rounded'
        placeholder='Password'
        required
      />

      {/* Toggle and Forgot Password */}
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer hover:underline'>Forget Password?</p>

        {currentState === 'Login' ? (
          <p
            onClick={() => setCurrentState('Sign Up')}
            className='cursor-pointer hover:underline'
          >
            Create Account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState('Login')}
            className='cursor-pointer hover:underline'
          >
            Login Here
          </p>
        )}
      </div>

      <button
        type='submit'
        className='bg-black text-white font-light px-8 py-2 mt-4 rounded hover:bg-gray-900 transition'
      >
        {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
      </button>
    </form>
  );
};

export default Login;
