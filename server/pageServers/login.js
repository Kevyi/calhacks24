const express = require("express");
const router = express.Router();
const db = require('../database.js');

//user router.get() instead of app.get().


router.post("/login", (req, res) => {


    const {email, password} = req.body;
    const query = 'SELECT password FROM users WHERE username = ?';
  
    //Implement control handler for if error.

    db.getConnection((error, connection) => {
      if (error) {
        console.error('Error connecting to MySQL database:', error);    
      } else {
        console.log('Connected to MySQL database!');

        try{
            db.query(query, [email], (err, results) => {  
              
              connection.release();

              if (err) {
      
                console.error('Error inserting data:', err);
                res.json({ success: false, email : `${email}`})
              }
      
              



              if(results.length === 0){
                  res.json({ success: false, email : "User not found." })
                  return
              }else if(results[0].password === null){
                res.json({ success: false, email : "User not found." })
                return
              }
              //If obtained results === password, return success.
              else if(results[0].password === password){
                  res.json({success: true, email : `${email}`})
                  return
              }
              else{
                res.json({success: false, email : `${email}`})
                return
              }
              
            });
          }catch(err){
              res.json({ success: false, email : `${email}`})
              return
          }
      }

    });
    
      

  
  
    
    
   
  
  });



module.exports = router