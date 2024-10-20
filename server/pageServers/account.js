const express = require("express");
const router = express.Router();



router.post("/register", (req, res) => {

  
    db.getConnection((error, connection) => {
      if (error) {
        console.error('Error connecting to MySQL database:', error);
      } else {
        console.log('Connected to MySQL database!');
  
  
         
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