import React, { useState } from 'react';
import './pageStyle/login.css';

export default function Login() {
  // State to store form data
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  // State to show success or error messages
  const [message, setMessage] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page
    
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('Login successful!');
      } else {
        setMessage(data.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="login-page-container">
      <div className="left-side">
        {/* Blank color palette */}
      </div>
      <div className="right-side">
        <div className="login-container">
          <h2>Login</h2>

          {/* Display success or error messages */}
          {message && <p>{message}</p>}

          {/* Login Form */}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}