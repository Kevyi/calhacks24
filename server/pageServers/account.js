const express = require("express");
const router = express.Router();
const db = require('../database.js');


router.post("/update-email", (req, res) => {

    const {email, oldEmail} = req.body;
  
    db.getConnection((error, connection) => {
      if (error) {
        console.error('Error connecting to MySQL database:', error);
      } else {
        console.log('Connected to MySQL database!');
  
  
        const query = `UPDATE users SET username = ? WHERE username = ?`;
        
         
        try{
  
          //Change old tasks details.
          db.query(query, [email,oldEmail], (err, results) => {
  
            connection.release();
            
  
            if (err) {
              console.error('Error inserting data:', err);
              res.json({success: false})
              return;
            }
            res.json({ success: true})
          });
        }catch(err){
          console.error('Error inserting data:', err);
          res.json({ success: false})
  
        }
      }
  
      
  
  
    });
    
    
  });


  router.post("/update-password", (req, res) => {

    const {email, password} = req.body;
  
    db.getConnection((error, connection) => {
      if (error) {
        console.error('Error connecting to MySQL database:', error);
      } else {
        console.log('Connected to MySQL database!');
  
  
        const query = `UPDATE users SET password = ? WHERE username = ?`;
        
         
        try{
  
          //Change old tasks details.
          db.query(query, [password, email], (err, results) => {
  
            connection.release();
            
  
            if (err) {
              console.error('Error inserting data:', err);
              res.json({success: false})
              return;
            }
            res.json({ success: true})
          });
        }catch(err){
          console.error('Error inserting data:', err);
          res.json({ success: false})
  
        }
      }
  
      
  
  
    });
    
    
  });


  router.post("/update-balance", (req, res) => {

    const {email, balanace} = req.body;
  
    db.getConnection((error, connection) => {
      if (error) {
        console.error('Error connecting to MySQL database:', error);
      } else {
        console.log('Connected to MySQL database!');
  
  
        const query = `UPDATE users SET balance = ? WHERE username = ?`;
        
         
        try{
  
          //Change old tasks details.
          db.query(query, [balance, email], (err, results) => {
  
            connection.release();
            
  
            if (err) {
              console.error('Error inserting data:', err);
              res.json({success: false})
              return;
            }
            res.json({ success: true})
          });
        }catch(err){
          console.error('Error inserting data:', err);
          res.json({ success: false})
  
        }
      }
  
      
  
  
    });
    
    
  });

  router.post("/retrieve-balance", (req, res) => {

    const {email} = req.body;
  
    db.getConnection((error, connection) => {
      if (error) {
        console.error('Error connecting to MySQL database:', error);
      } else {
        console.log('Connected to MySQL database!');
  
  
        const query = `SELECT balance WHERE username = ?`;
        
         
        try{
  
          //Change old tasks details.
          db.query(query, [oldEmail], (err, results) => {
  
            connection.release();
            
  
            if (err) {
              console.error('Error inserting data:', err);
              res.json({newBalance: false})
              return;
            }
            res.json({newBalance : results[0]})
          });
        }catch(err){
          console.error('Error inserting data:', err);
          res.json({ success: false})
  
        }
      }
  
      
  
  
    });
    
    
  });

module.exports = router