// import jwt_decode from 'jwt-decode'; // To decode JWT tokens

// Save token in localStorage
export const saveToken = (token) => {
  localStorage.setItem('token', token);
};

// Get token from localStorage
export const getToken = () => {
  return localStorage.getItem('token');
};

// Remove token from localStorage (for logout)
export const removeToken = () => {
  localStorage.removeItem('token');
};

// Check if the user is authenticated
export const isAuthenticated = () => {
  const token = getToken();
  // Check if a token exists and optionally if it's not expired
  return token !== null;
};

// // Decode the token to get user info (if needed)
// export const getUserInfo = () => {
//   const token = getToken();
//   if (token) {
//     return jwt_decode(token); // Decodes the token payload (e.g., user ID, email, etc.)
//   }
//   return null;
// };
