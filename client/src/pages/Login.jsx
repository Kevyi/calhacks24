// pages/Login.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import styles from './pageStyle/login.module.css'; // Import CSS
import logo from '../assets/Panda4.png'; // Import the logo image


export default function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Initialize navigate function

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
      console.log(data);
      if (response.ok && data.success === true) {
        setMessage('Login successful!');

        //Returns this under keyvalue user: {success: true, email : `${email}`}
          //Use this: const storedUserData = JSON.parse(localStorage.getItem('user')); // storedUserData will be null if no 'user'
        
        localStorage.setItem('user', JSON.stringify(data));
        navigate('/tasks-page');

      } else {
        setMessage(data.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (    
    <div className={styles.homeContainer}>
      <div className={styles.leftSide}>
        <div className={styles.loginImageContainer}>
        <img src={logo} alt="Panda Logo" className={styles.loginImage} />
        </div>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.formWrapper}>
          <h2 className={styles.title}>Login</h2> {/* Title aligned above the form */}
          <form onSubmit={handleSubmit} className={styles.form}>
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