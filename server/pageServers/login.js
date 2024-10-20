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

  
      const query = 'INSERT INTO users (username, password, balance) VALUES (?, ?, ?)';
  
      //Implement control handler for if error.
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