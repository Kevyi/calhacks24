import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import AccountPage from './pages/Account';
import AddFriendPage from './pages/AddFriend';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import ShameBoardPage from './pages/ShameBoard';
import TasksPage from './pages/Tasks';
import Testing1 from './pages/Testing1';

// PrivateRoute component to handle protected routes
const PrivateRoute = ({ element: Element, user, ...rest }) => {
  return user ? (
    <Element {...rest} />
  ) : (
    <Navigate to="/" replace />
  );
};

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data or authentication status from local storage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/add-friend" element={<PrivateRoute element={AddFriendPage} user={user} />} />
          <Route path="/account" element={<PrivateRoute element={AccountPage} user={user} />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage setUser={setUser} />} />
          <Route path="/shame-board" element={<PrivateRoute element={ShameBoardPage} user={user} />} />
          <Route path="/tasks-page" element={<PrivateRoute element={TasksPage} user={user} />} />
          <Route path="/testing1" element={<Testing1 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
