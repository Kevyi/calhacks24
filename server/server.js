//Imports Framework
const express = require("express");
//Calls the express() function or basically constructor and makes instance of express().
const app = express();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const db = require('./database');


const cors = require("cors");
const corsOptions = {
    origin: ["http://localhost:5173"],
};
app.use(cors(corsOptions));
app.use(express.json());

    
const accountRoute = require("./pageServers/account.js");
const loginRoute = require("./pageServers/login.js");
const registerRoute = require("./pageServers/register.js");
const tasksRoute = require("./pageServers/tasks.js");
const addFriendRoute = require("./pageServers/addFriend.js");
const shameBoardRoute = require("./pageServers/shameBoard.js");



//app.use("/home", homeRoute);

app.use(accountRoute);
app.use(loginRoute);
app.use(registerRoute);
app.use(tasksRoute);
app.use(addFriendRoute);
app.use(shameBoardRoute);


 

app.listen(8080, () => {
    console.log("server started");
});


