const mysql = require('mysql');

// Create a connection pool (recommended for better performance)
const db = mysql.createPool({
  connectionLimit: 10,   //Allows for a max of 10 connections at once. Returns to pool after a connection ends.
  host: 'localhost',      // Change to your MySQL host
  user: 'root',           // Change to your MySQL user
  password: '',   // Change to your MySQL password
  database: 'calhacks24', // Change to your database name
  port: 3306
});

// Export the connection pool
module.exports = db;