import { useState, useEffect } from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import axios from 'axios';
import './App.css'

import AccountPage from './pages/Account.jsx'
import AddFriendPage from './pages/AddFriend.jsx'
import HomePage from './pages/Home.jsx'
import LoginPage from './pages/Login.jsx'
import RegisterPage from './pages/Register.jsx'
import ShameBoardPage from './pages/ShameBoard.jsx'
import TasksPage from './pages/Tasks.jsx'
import Testing1 from './pages/Testing1.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
          <Routes>
            <Route index element = {<HomePage></HomePage>}></Route> 
           {/*<Route path = "/home" element = {<HomePage/>}></Route>*/}
            <Route path = "/add-friend" element = {<AddFriendPage/>}></Route>
            <Route path = "/account" element = {<AccountPage/>}></Route>
            <Route path = "/register" element = {<RegisterPage/>}></Route>
            <Route path = "/login" element = {<LoginPage/>}></Route>
            <Route path = "/shame-board" element = {<ShameBoardPage/>}></Route>
            <Route path = "/tasks-page" element = {<TasksPage/>}></Route>
            <Route path = "/testing1" element = {<Testing1/>}></Route>
          </Routes>
      </Router>

    </>
  )
}

export default App

// import { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import axios from 'axios';
// import './App.css';

// import AccountPage from './pages/Account';
// import AddFriendPage from './pages/AddFriend';
// import HomePage from './pages/Home';
// import LoginPage from './pages/Login';
// import RegisterPage from './pages/Register';
// import ShameBoardPage from './pages/ShameBoard';
// import TasksPage from './pages/Tasks';
// import Testing1 from './pages/Testing1';

// import { isAuthenticated } from './services/auth'; // Import authentication check

// // PrivateRoute component to handle protected routes
// const PrivateRoute = ({ element: Element, ...rest }) => {
//   return isAuthenticated() ? (
//     <Element {...rest} />
//   ) : (
//     <Navigate to="/login" replace />
//   );
// };

// function App() {
//   return (
//     <>
//       <Router>
//         <Routes>
//           <Route index element={<HomePage />} />
//           <Route path="/add-friend" element={<PrivateRoute element={AddFriendPage} />} />
//           <Route path="/account" element={<PrivateRoute element={AccountPage} />} />
//           <Route path="/register" element={<RegisterPage />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/shame-board" element={<PrivateRoute element={ShameBoardPage} />} />
//           <Route path="/tasks-page" element={<PrivateRoute element={TasksPage} />} />
//           <Route path="/testing1" element={<Testing1 />} />
//         </Routes>
//       </Router>
//     </>
//   );
// }

// export default App;
