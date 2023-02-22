const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require("mongoose");
const User = require('./models/user.model')
const jwt = require('jsonwebtoken');
require('dotenv').config();

app.use(cors());
app.use(express.json())

// mongoose.connect('mongodb://localhost:27017/gtg')





app.post("/api/register", async (req, res) => {
    console.log(req.body);
    try {
        await User.create({
            name: req.body.name,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password
        })
        res.json({ status: "Ok" })
    } catch(err){
        res.json({ status: "error", error: "Duplicate email" })
    }
    
})

app.post("/api/login", async (req, res) => {

    const user = await User.findOne({
        email: req.body.email,
        password: req.body.password
    })

    if (user){
        const token = jwt.sign({
            name: user.name,
            email: user.email
        }, 'secret123')

        return res.json({ status: "ok", user: token })
    } else {
        return res.json({ status: "error", user: false })
    }
    
})

//Connect to database
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(5500, () => {console.log("Server started on port 5500")})
    })
    .catch((error) => {
        console.log(error)
    })
