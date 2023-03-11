const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require("mongoose");
const axios = require("axios");
const User = require('../models/user.model')
const jwt = require('jsonwebtoken');
const games_routes = require('../routes/games')
require('dotenv').config();

app.use(cors());
app.use(express.json())

const path = __dirname + '/public/';
app.use(express.static(path))

app.get('/', function (req,res) {
    res.sendFile(path + "index.html");
  });

  app.get('/register', function (req,res) {
    res.sendFile(path + "index.html");
  });

  app.get('/login', function (req,res) {
    res.sendFile(path + "index.html");
  });


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

app.use('/api/games', games_routes)

//Connect to database
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {console.log(`Server started on port ${process.env.PORT}`)})
    })
    .catch((error) => {
        console.log(error)
    })

    