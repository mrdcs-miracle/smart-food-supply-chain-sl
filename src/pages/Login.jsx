import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import lgImage from '../assets/lg.avif'; 


const Login = ({ setUser }) => {
  const [isLogin, setLogin] = useState(true);

  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState(''); 
  const [username, setUsername] = useState(''); // 1. NEW: State for Username

  const navigate = useNavigate();

  const handleAuth = (e) => {
    e.preventDefault();

    // --- Sign Up ---
    if (!isLogin) {
      // Create the new user 
      const newUser = {
        name: fullName || username || "New User", 
        username: username,                       
        role: "Public User",
        email: email
      };

      
      setUser(newUser);

      // Redirect to home page
      console.log("Account Created:", newUser);
      navigate('/');
      return; 
    }

    // --- Login ---
    if (email.includes('admin')) {
      setUser({ name: "Super Admin", username: "admin", role: "Administrator", email: email });
      navigate('/admin-dashboard');

    } else if (email.includes('gov')) {
      setUser({ name: "Gov. Manager", username: "gov_manager", role: "Manager", email: email });
      navigate('/dashboard');

    } else {
      setUser({ name: "Public User", username: "user", role: "Public User", email: email });
      navigate('/');
    }
  };

  return (
    <div className='flex min-h-screen bg-gradient-to-r from-green-100 to-green-50'>

      <div className='flex items-center justify-center w-full p-8 md:w-1/2 lg:p-12'>
        <div className='w-full max-w-md space-y-8'>

          <div className='text-center'>
            <h2 className='mb-2 text-3xl font-bold text-gray-800'>
              {isLogin ? 'Welcome Back!' : 'Join Lk Supply Chain'}
            </h2>
            <p className='text-gray-500'>
              {isLogin ? 'Enter your details to access your dashboard.' : 'Create an account to start managing your supply chain.'}
            </p>
          </div>

          <form className='mt-8 space-y-6' onSubmit={handleAuth}>

            {/* --- Sign up fields --- */}
            {!isLogin && (
              <div className='space-y-4 animate-fade-in-down'>
                
                {/* Username input */}
                <div>
                  <label className='block mb-1 text-sm font-medium text-gray-700'>Username</label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className='w-full px-4 py-3 transition-all border border-gray-200 rounded-lg outline-none bg-gray-50 focus:border-green-500 focus:ring-2 focus:ring-green-200'
                    placeholder='johndoe123'
                  />
                </div>

                {/* Existing Full Name Inpuut*/}
                <div>
                  <label className='block mb-1 text-sm font-medium text-gray-700'>Full Name</label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className='w-full px-4 py-3 transition-all border border-gray-200 rounded-lg outline-none bg-gray-50 focus:border-green-500 focus:ring-2 focus:ring-green-200'
                    placeholder='John Doe'
                  />
                </div>
              </div>
            )}

            {/* --- Email & Password --- */}
            <div>
              <label className='block mb-1 text-sm font-medium text-gray-700'>Email Address</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-full px-4 py-3 transition-all border border-gray-200 rounded-lg outline-none bg-gray-50 focus:border-green-500 focus:ring-2 focus:ring-green-200'
                placeholder='name@example.com'
                required
              />
            </div>

            <div>
              <label className='block mb-1 text-sm font-medium text-gray-700'>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='w-full px-4 py-3 transition-all border border-gray-200 rounded-lg outline-none bg-gray-50 focus:border-green-500 focus:ring-2 focus:ring-green-200'
                placeholder='••••••••'
                required
              />
            </div>

            {isLogin && (
              <div className='flex items-center justify-end'>
                <a href="#" className='text-sm font-medium text-green-600 hover:text-green-500'>Forgot your password?</a>
              </div>
            )}

            <button type="submit"
              className='w-full px-4 py-3 font-bold text-white transition-all bg-green-600 rounded-lg shadow-lg hover:bg-green-700 shadow-green-600/30 hover:scale-[1.02] active:scale-[0.98]'>
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          {/* Toggle Login and Sign Up */}
          <div className='mt-6 text-center'>
            <p className='text-gray-600'>
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button
                onClick={() => setLogin(!isLogin)}
                className='ml-1 font-bold text-green-600 underline transition-colors hover:text-green-500 decoration-transparent hover:decoration-green-500'
              >
                {isLogin ? 'Sign up' : 'Log in'}
              </button>
            </p>
          </div>

          <div className='mt-4 text-center'>
            <Link to="/" className='text-sm text-gray-400 transition-colors hover:text-gray-600'>
              &larr; Back to Home
            </Link>
          </div>

        </div>
      </div>

      {/* Right Side Image Panel */}
      <div className='relative hidden w-1/2 md:block'>
        <img
          src={lgImage}
          alt="Sri Lanka Agriculture"
          className='absolute inset-0 object-cover w-full h-full'
        />
        <div className='absolute inset-0 flex items-end p-16 bg-gradient-to-t from-green-900/90 to-green-900/40'>
          <div className='text-white'>
            <h3 className='mb-4 text-4xl font-bold'>Empowering Sri Lanka's Agriculture</h3>
            <p className='max-w-md text-lg text-green-100'>Join the network that connects over 5,000 farmers and distributors across the nation.</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Login