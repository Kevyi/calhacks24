import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './pageStyle/account.module.css';

function AccountPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [balance, setBalance] = useState(0); // Initial balance state
  const [addAmount, setAddAmount] = useState(''); // State for the amount to add
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleAddAmountChange = (e) => {
    setAddAmount(e.target.value);
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    const oldEmail = JSON.parse(localStorage.getItem('user')).email;
    try {
      const response = await fetch('http://localhost:8080/update-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, oldEmail }),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Email updated successfully!');
        console.log('Server response:', data);
        setMessage('Email updated successfully');
        navigate('/'); // Redirect to home page on success
      } else {
        setMessage('Error updating email');
      }
    } catch (error) {
      setMessage('Error updating email');
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/update-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();
      if (response.ok) {
        alert('Password updated successfully!');
        console.log('Server response:', data);
        setMessage('Password updated successfully');
        navigate('/'); // Redirect to home page on success
      } else {
        setMessage('Error updating password');
      }
    } catch (error) {
      setMessage('Error updating password');
    }
  };

  const handleUpdateBalance = async () => {
    const email = localStorage.getItem('userEmail');
    if (email) {
      try {
        const response = await fetch('http://localhost:8080/update-balance', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, addAmount: parseFloat(addAmount) }),
        });
        const data = await response.json();
        if (response.ok) {
          setBalance(data.newBalance);
          setAddAmount(''); // Clear the input field
        } else {
          console.error(data.message);
        }
      } catch (error) {
        console.error('Error updating balance:', error);
      }
    }
  };

  return (
    <div className={styles.container}>
      <h2>Update Account</h2>
      {message && <p className={styles.message}>{message}</p>}
      <div className={styles.box}>
        <h3>Change Email</h3>
        <form onSubmit={handleEmailSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className={styles.input}
            />
          </div>
          <button type="submit" className={styles.button}>Update Email</button>
        </form>
      </div>
      <div className={styles.box}>
        <h3>Change Password</h3>
        <form onSubmit={handlePasswordSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="password">New Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              className={styles.input}
            />
          </div>
          <button type="submit" className={styles.button}>Update Password</button>
        </form>
      </div>
      <div className={styles.box}>
        <h3>Update Balance</h3>
        <div className={styles.balanceContainer}>
          <h3>Current Balance: ${balance}</h3>
          <div className={styles.formGroup}>
            <label htmlFor="addAmount">Add Amount:</label>
            <input
              type="number"
              id="addAmount"
              value={addAmount}
              onChange={handleAddAmountChange}
              className={styles.input}
            />
          </div>
          <button onClick={handleUpdateBalance} className={styles.button}>Add to Balance</button>
        </div>
      </div>
    </div>
  );
}

export default AccountPage;