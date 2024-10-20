const express = require("express");
const router = express.Router();
const db = require('../database.js');

//user router.get() instead of app.get().

// const tasks = {
//     'user@example.com': {
//       yourTasks: [
//         { description: 'Complete the report', friend: 'Alice', amount: 5, timeLeft: '2 hours' },
//         { description: 'Fix the bug', friend: 'Bob', amount: 10, timeLeft: '1 day' },
//       ],
//       othersTasks: [
//         { description: 'Review the code', friend: 'Charlie', amount: 15, timeLeft: '3 hours' },
//         { description: 'Design new logo', friend: 'Eve', amount: 20, timeLeft: '2 days' },
//       ],
//       friends: ['Alice', 'Bob', 'Charlie'],
//       balance: 50, // Example balance
//     },
//   };

router.post("/tasks", (req, res) => {

    const {email} = req.body;
  
    const query = 'SELECT * FROM tasks WHERE username = ?';
    console.log(email);
  
    db.getConnection((error, connection) => {
      if (error) {
        console.error('Error connecting to MySQL database:', error);
      } else {
        console.log('Connected to MySQL database in Tasks!');
  
         //Implement control handler for error duplication.
        try{
            
          //Friends is an empty array right now.
          db.query(query, [email], (err, results) => {
  
            connection.release();
            

            res.json(results)   

            
          });
        }catch(err){
          console.error('Error inserting data:', err);
          res.json(results)
  
        }
      }
  
      
  
  
    });
    
    
  
  });

  router.post("/tasksTheir", (req, res) => {

    const {email} = req.body;
  
    const query = 'SELECT * FROM tasks WHERE friendUsername = ?';
    console.log(email);
  
    db.getConnection((error, connection) => {
      if (error) {
        console.error('Error connecting to MySQL database:', error);
      } else {
        console.log('Connected to MySQL database in Tasks!');
  
         //Implement control handler for error duplication.
        try{
            
          //Friends is an empty array right now.
          db.query(query, [email], (err, results) => {
  
            connection.release();
            

            res.json(results)   

            
          });
        }catch(err){
          console.error('Error inserting data:', err);
          res.json(results)
  
        }
      }
  
      
  
  
    });
    
    
  
  });

  router.post("/tasksFriendsBal", (req, res) => {

    const {email} = req.body;
  
    const query = 'SELECT * FROM users WHERE username = ?';
    console.log(email);
  
    db.getConnection((error, connection) => {
      if (error) {
        console.error('Error connecting to MySQL database:', error);
      } else {
        console.log('Connected to MySQL database in Tasks!');
  
         //Implement control handler for error duplication.
        try{
            
          //Friends is an empty array right now.
          db.query(query, [email], (err, results) => {
  
            connection.release();
            

            res.json(results)   

            
          });
        }catch(err){
          console.error('Error inserting data:', err);
          res.json(results)
  
        }
      }
  
      
  
  
    });
    
    
  
  });


  router.post("/add-task", (req, res) => {

    const {email, task} = req.body;
    const title = "whatever"
    
  
    const query = `INSERT INTO tasks (username, title, description, money, due_date, friendUsername)
                    VALUES (?, ?, ?, ?, ?, ?);`;

    console.log(task.friend)
  
    db.getConnection((error, connection) => {
      if (error) {
        console.error('Error connecting to MySQL database:', error);
      } else {
        console.log('Connected to MySQL database in adding Tasks!');
  
         
        try{
          
          
          db.query(query, [email, title,  task.description, task.amount, task.timeLeft, task.friend], (err, results) => {
  
            connection.release();
            

            res.json(results)   

            
          });
        }catch(err){
          console.error('Error inserting data:', err);
          res.json(results)
  
        }
      }
  
      
  
  
    });
    
    
  
  });


  router.post("/delete-task", (req, res) => {

    const {email, task} = req.body;
    const title = "whatever"
    
  
    const query = `INSERT INTO tasks (username, title, description, money, due_date, friendUsername)
                    VALUES (?, ?, ?, ?, ?, ?);`;

    
  
    db.getConnection((error, connection) => {
      if (error) {
        console.error('Error connecting to MySQL database:', error);
      } else {
        console.log('Connected to MySQL database in adding Tasks!');
  
         
        try{
          
          
          db.query(query, [email, title,  task.description, task.amount, task.timeLeft, task.friend], (err, results) => {
  
            connection.release();
            

            res.json(results)   

            
          });
        }catch(err){
          console.error('Error inserting data:', err);
          res.json(results)
  
        }
      }
  
      
  
  
    });
    
    
  
  });


module.exports = router