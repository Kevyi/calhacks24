import React from 'react';
import './Home.css'; // Import the styles

const Home = () => {
  return (
    <div className="home-container">
      {/* Header with Logo and Auth Buttons */}
      <header className="navbar">
        <div className="logo">Do Your F'n Job</div>
        <div className="auth-buttons">
          <button onClick={() => alert('Navigate to Login')}>Log In</button>
          <button onClick={() => alert('Navigate to Register')}>Register</button>
        </div>
      </header>

      {/* Main Content */}
      <main className="content">
        <h1>Welcome to Do Your F'n Job!</h1>
        <p>A productivity tool to keep you focused and on track.</p>
        <p>Log in or register to start crushing your tasks!</p>
      </main>

      {/* Footer */}
      <footer>
        <p>test</p>
      </footer>
    </div>
  );
};

export default Home;