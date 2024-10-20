// pages/Login.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './pageStyle/login.module.css';

export default function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('userEmail', formData.email);
        setMessage('Login successful!');
        navigate('/dashboard');
      } else {
        setMessage(data.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className={styles.loginPageContainer}>
      <div className={styles.leftSide}></div>

      {/* Right side with Login title above the white box */}
      <div className={styles.rightSide}>
        <h2 className={styles.Title}>Login</h2> {/* Title moved outside the form box */}
        <div className={styles.loginContainer}>
          {message && <p>{message}</p>}
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="panda@doyour.work"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
            </div>
            <button type="submit" className={styles.submitButton}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}