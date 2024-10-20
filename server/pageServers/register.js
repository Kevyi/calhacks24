const express = require("express");
const router = express.Router();
const db = require('../database.js');

const bcrypt = require("bcrypt");

//user router.get() instead of app.get().




router.post("/register", (req, res) => {


  db.connect((error) => {
    if (error) {
      console.error('Error connecting to MySQL database:', error);
    } else {
      console.log('Connected to MySQL database!');
    }
  });
  
    const {email, password} = req.body;

    console.log(`${email}}`);
    

    //Sets balance on default to 100 since we are not implementing stripe api.
    let balance = 1000;

    const query = 'INSERT INTO users (username, password, balance) VALUES (?, ?, ?)';


    //Implement control handler for error duplication.
  try{
    db.query(query, [email, password, balance], (err, results) => {
      if (err) {
        console.error('Error inserting data:', err);
        res.json({ success: false, message: `${email}` })
      }
      res.json({ success: true, message: `${email}` })
    });
  }catch(err){
    console.error('Error inserting data:', err);
    res.json({ success: false, message: `${email}` })

  }
    
  
  

  // close the MySQL connection
  db.end();

});










module.exports = router