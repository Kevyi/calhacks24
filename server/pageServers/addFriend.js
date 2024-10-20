const express = require("express");
const router = express.Router();
const db = require('../database.js');

router.use(express.json())
//user router.get() instead of app.get().


//add-friend ---url



router.post("/add-friend", (req, res) => {


    
  

    const {userEmail, friendCode} = req.body; // Get user ID from the URL
    const newData = req.body; 

    // Step 1: Retrieve existing user data
    const getUserQuery = 'SELECT user_friends FROM users WHERE username = ?';
    db.query(getUserQuery, [userEmail], (err, results) => {
    if (err) return res.status(500).send('Error retrieving user data');
    

    if (results.length === 0) {
      return res.status(404).send('User not found');
    }
    
    // Step 2: Parse existing JSON data and add new item
    let userData = JSON.parse(results[0].user_friends); // Converts json string to js object
    if (!Array.isArray(userData)) userData = []; // Ensure it's an array

    let temp = JSON.parse(results[0].user_friends)


    userData.push(friendCode); // Add the new data

    console.log("after: " + userData)

    // Step 3: Update the JSON column in the database
    const updateUserQuery = 'UPDATE users SET user_friends = ? WHERE username = ?';
    db.query(updateUserQuery, [JSON.stringify(userData), userEmail], (err) => {
      if (err) return res.status(500).send('Error updating user data');

      res.json('User data updated successfully');
    });
  });
  
    
    
   
  
  });






module.exports = router