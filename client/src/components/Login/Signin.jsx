import React, { useState } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthenticated } from '../../redux/reducers/authSlice';

function Signin() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignin, setIsSignin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector(state => state.user)
  console.log(users,'jhsdf')

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:3001/register', { name, email, password });
      setIsSignin(true);
    } catch (err) {
      console.error('Error:', err);
      setError('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSigninSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:3001/login', { email, password });
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        dispatch(setAuthenticated(response.data.user));
        navigate('/profile');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='bg-[#64626282] p-10 rounded-md shadow-lg z-10 w-[20rem]'>
      <h2 className='text-2xl mb-4 font-bold text-center text-teal-600'>{isSignin ? 'Sign in' : 'Sign up'}</h2>
      {error && <p className="text-red-500 text-center">{error}</p>}
      
      <form onSubmit={(e) => {
        e.preventDefault();
        if (isSignin) {
          handleSigninSubmit(e);
        } else {
          handleSignupSubmit(e);
        }
      }} className='space-y-4'>
        { !isSignin && (
          <div>
            <label htmlFor="name" className='block text-sm font-semibold text-teal-600'>Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='w-full p-2 outline-none focus:border focus:border-teal-600 bg-[#0000005e] rounded-md text-gray-300'
              required
            />
          </div>
        )}
        
        <div>
          <label htmlFor="email" className='block text-sm font-semibold text-teal-600'>Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full p-2 outline-none focus:border focus:border-teal-600 bg-[#0000005e] rounded-md text-gray-300'
            required
          />
        </div>
        
        <div>
          <label htmlFor="password" className='block text-sm font-semibold text-teal-600'>Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='w-full p-2 outline-none focus:border focus:border-teal-600 bg-[#0000005e] rounded-md text-gray-300'
            required
          />
        </div>
        
        <button type="submit" className={`w-full py-2 bg-neutral-900 text-gray-400 rounded-md hover:bg-black font-medium ${loading ? 'flex justify-center items-center p-2' : ''}`}>
          {loading ? <Spinner /> : 'Submit'}
        </button>
      </form>
      
      <p className='m-2 text-center'>OR</p>
      <p className='text-center'>
        {isSignin ? 'not registered yet' : 'already have an account?'} 
        <span onClick={() => setIsSignin((prev) => !prev)} className='text-gray-500 font-semibold underline hover:text-gray-600'>
          {isSignin ? 'Sign Up' : 'Sign In'}
        </span>
      </p>
    </div>
  );
}

export default Signin;
