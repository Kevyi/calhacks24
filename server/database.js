const mysql = require('mysql');

// Create a connection pool (recommended for better performance)
const db = mysql.createConnection({
  host: 'localhost',      // Change to your MySQL host
  user: 'root',           // Change to your MySQL user
  password: '',   // Change to your MySQL password
  database: 'calhacks24', // Change to your database name
  port: 3306
});

// Export the connection pool
module.exports = db;