const express = require("express");
const router = express.Router();
const db = require('../database.js');

const bcrypt = require("bcrypt");

//user router.get() instead of app.get().




router.post("/register", (req, res) => {

  const {email, password} = req.body;

  //Sets balance on default to 100 since we are not implementing stripe api.
  let balance = 1000;
  //Make sure this works. Use push() to push values onto array.
  let friends = JSON.stringify([]);

  const query = 'INSERT INTO users (username, password, balance, user_friends) VALUES (?, ?, ?, ?)';

  db.getConnection((error, connection) => {
    if (error) {
      console.error('Error connecting to MySQL database:', error);
    } else {
      console.log('Connected to MySQL database!');


       //Implement control handler for error duplication.
      try{

        //Friends is an empty array right now.
        db.query(query, [email, password, balance, friends], (err, results) => {

          connection.release();
          console.log(friends)

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
    }

    


  });
  
  
   
    
  
  



});










module.exports = router