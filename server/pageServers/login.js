const express = require("express");
const router = express.Router();


//user router.get() instead of app.get().


router.post("/login", (req, res) => {


    db.connect((error) => {
      if (error) {
        console.error('Error connecting to MySQL database:', error);
      } else {
        console.log('Connected to MySQL database!');
      }
    });
    
      const {email, password} = req.body;

  
      const query = 'SELECT password FROM users WHERE username = ?';
  
      //Implement control handler for if error.
 
      db.query(query, [email], (err, results) => {
        
        if (err) {

          console.error('Error inserting data:', err);
          res.json({ success: false, email})
        }

        //If obtained results === password, return success.
        if(results === password){
            res.json({success: true, email : `${email}`})
        }
        
      });
   
      
    
    
  
    // close the MySQL connection
    db.end();
  
  });



module.exports = router