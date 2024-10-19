//Imports Framework
const express = require("express");
//Calls the express() function or basically constructor and makes instance of express().
const app = express();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

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

app.use("/account", accountRoute);
app.use("/login", loginRoute);
app.use("/register", registerRoute);
app.use("/tasks-page", tasksRoute);
app.use("/add-friend", addFriendRoute);
app.use("/shame-board", shameBoardRoute);



app.post("/register", (req, res) => {
    const {email, password} = req.body;

    console.log(`${email}}`);

    res.json({ success: true, message: `${email}` });
});

app.listen(8080, () => {
    console.log("server started");
});
