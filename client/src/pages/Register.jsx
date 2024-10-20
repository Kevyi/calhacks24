// pages/Register.jsx

import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import styles from './pageStyle/register.module.css'; // Correct CSS import

export default function Register() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate(); // Initialize navigate function

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Registration successful!');
        console.log('Server response:', data);
        navigate('/login'); // Redirect to login page on success
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
    <div className={styles.homeContainer}>
      <div className={styles.leftSide}>
        <div className={styles.formWrapper}>
          <h2 className={styles.title}>Register Account</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>  
              <label htmlFor="email">Email Address:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
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
                onChange={handleInputChange}
                placeholder="Enter your password"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                placeholder="Confirm your password"
                required
              />
            </div>
            <button type="submit" className={styles.submitButton}>
              Register
            </button>
          </form>
        </div>
      </div>
      <div className={styles.rightSide}></div>
    </div>
  );
}