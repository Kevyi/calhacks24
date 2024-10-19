import { useState } from 'react';
import './pageStyle/register.css';

export default function Register() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      // POST request to backend
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json(); // Assume backend returns JSON

      if (response.ok) {
        alert('Registration successful!');
        console.log('Server response:', data);
      } else {
        alert('Registration failed!');
        console.error('Server error:', data);
      }

    } catch (error) {
      console.error('Network error:', error);
      alert('There was a problem submitting the form.');
    }
  };

  return (
    <div className="home-container">
      <div className="left-side">
        <h2>Register Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleInputChange}
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
              onChange={handleInputChange}
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Confirm Password:</label>
            <input 
              type="password" 
              id="confirm-password" 
              name="confirmPassword" 
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required 
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
      <div className="right-side">
        {/* Blank color palette */}
      </div>
    </div>
  );
}
