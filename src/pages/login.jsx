import React, { useState } from 'react';
import { Eye, EyeOff, User, Lock, Mail, Instagram, Linkedin } from 'lucide-react';

const TennisLogin = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Replace with your actual API call
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      // Replace with your preferred navigation method
      window.location.href = '/dashboard';
    } catch (err) {
      setError('Invalid username or password');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center bg-gray-100">
      <div className="flex items-center justify-center bg-white bg-opacity-90 border border-gray-300 rounded-lg p-8 shadow-lg w-full max-w-4xl mx-4">
        {/* Left Image */}
        <div className="hidden md:block w-1/3">
          <img
            alt="Tennis player serving"
            className="rounded-lg shadow-lg object-cover h-[500px]"
            src="/api/placeholder/300/500"
          />
        </div>

        {/* Login Form */}
        <div className="w-full md:w-2/3 p-4">
          <h1 className="text-3xl font-bold mb-6 text-center text-green-600">
            Tennis Login
          </h1>

          {error && (
            <div className="mb-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded text-center">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
              <input
                className="p-2 pl-10 border border-gray-300 rounded-md w-full"
                name="username"
                placeholder="Username"
                required
                type="text"
                value={formData.username}
                onChange={handleChange}
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
              <input
                className="p-2 pl-10 pr-10 border border-gray-300 rounded-md w-full"
                name="password"
                placeholder="Password"
                required
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={handleChange}
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-gray-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? 
                  <EyeOff className="h-5 w-5" /> : 
                  <Eye className="h-5 w-5" />
                }
              </button>
            </div>

            <button
              className={`p-2 bg-green-500 text-white rounded-md w-full hover:bg-green-700 transition duration-300 flex items-center justify-center
                ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"/>
              ) : (
                'Login'
              )}
            </button>
          </form>

          <div className="mt-4 space-y-2">
            <p className="text-center">
              <a href="/register" className="text-blue-500 hover:underline">
                Don {`'`}t have an account? Register here
              </a>
            </p>
            <p className="text-center">
              <a href="/forgot-password" className="text-blue-500 hover:underline">
                Forgot Password?
              </a>
            </p>
          </div>

          <div className="mt-6">
            <p className="text-center text-gray-600">Or login with</p>
            <div className="flex justify-center gap-4 mt-4">
              <button 
                onClick={() => window.location.href = '/auth/google'}
                className="p-2 bg-red-500 text-white rounded-full hover:bg-red-700 transition duration-300"
              >
                <Mail className="h-5 w-5" />
              </button>
              <button 
                onClick={() => window.location.href = '/auth/instagram'}
                className="p-2 bg-pink-500 text-white rounded-full hover:bg-pink-700 transition duration-300"
              >
                <Instagram className="h-5 w-5" />
              </button>
              <button 
                onClick={() => window.location.href = '/auth/linkedin'}
                className="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-900 transition duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TennisLogin;