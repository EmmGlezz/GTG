const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require("mongoose");
const axios = require("axios");
const User = require('./models/user.model')
const jwt = require('jsonwebtoken');
require('dotenv').config();

app.use(cors());
app.use(express.json())


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

app.get("/api/games", async (req, res) => {
    try {
        const response = await axios.post('https://id.twitch.tv/oauth2/token?client_id=rp12vq3vzr3w42e7lzauu2pvhr2ul8&client_secret=l0jm3jo3ic1abtw20ye47hwbunq5bn&grant_type=client_credentials')
        const access_token = response.data.access_token

        const data = 'fields name, cover.*, websites.*, genres.*; where rating >= 80 & release_dates.date > 1577231999; limit 30;';

        const config = {
        method: 'post',
        url: 'https://api.igdb.com/v4/games',
        headers: { 
            'Client-ID': 'rp12vq3vzr3w42e7lzauu2pvhr2ul8', 
            'Authorization': `Bearer ${access_token}`, 
            'Content-Type': 'text/plain', 
            'Cookie': '__cf_bm=oAq7169WV7Qr8Va_OfXq4dxG8GabjyDAupPTV2seA5w-1677674219-0-Af2KbkxX6K6Ryq6ITUpS3NmVL8OHoZ2N4pVbFMHPgRCSVKA8pov/BHTvnQckW2ItCr906OeACrOkVrWpHpCCvvA='
        },
        data : data
        };

        const games = await axios(config)

        res.send(JSON.stringify(games.data))
    } catch(err){
        res.json({ status: "error", error: "Failed to connect" })
    }
})

//Connect to database
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {console.log(`Server started on port ${process.env.PORT}`)})
    })
    .catch((error) => {
        console.log(error)
    })

    