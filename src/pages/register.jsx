import React, { useState } from 'react';
import { User, Mail, Lock, ChevronDown } from 'lucide-react';

const TennisRegister = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: ''
  });
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
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      window.location.href = '/login';
    } catch (err) {
      setError('Registration failed. Please try again.');
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
            alt="Tennis player in action"
            className="rounded-lg shadow-lg object-cover h-[500px]"
            src="/api/placeholder/300/500"
          />
        </div>

        {/* Registration Form */}
        <div className="w-full md:w-2/3 p-4">
          <h1 className="text-3xl font-bold mb-6 text-center text-green-600">
            Register
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
              <Mail className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
              <input
                className="p-2 pl-10 border border-gray-300 rounded-md w-full"
                name="email"
                placeholder="Email"
                required
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
              <input
                className="p-2 pl-10 border border-gray-300 rounded-md w-full"
                name="password"
                placeholder="Password"
                required
                type="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div className="relative">
              <ChevronDown className="absolute right-3 top-3 text-gray-400 h-5 w-5 pointer-events-none" />
              <select
                className="p-2 border border-gray-300 rounded-md w-full appearance-none"
                name="role"
                required
                value={formData.role}
                onChange={handleChange}
              >
                <option value="" disabled>Select your role</option>
                <option value="ROLE_USER">Customer</option>
                <option value="ROLE_SELLER">Seller</option>
              </select>
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
                'Register'
              )}
            </button>
          </form>

          <div className="mt-4">
            <p className="text-center">
              <a href="/login" className="text-blue-500 hover:underline">
                Already have an account? Log in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TennisRegister;