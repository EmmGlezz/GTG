const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require("mongoose");
const axios = require("axios");
const User = require('./models/user.model')
const jwt = require('jsonwebtoken');
const games_routes = require('./routes/games')
const game_route = require('./routes/game')
const genres_route = require('./routes/genres')
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

app.use('/api/games', games_routes)
app.use('/api/game/:gameId', game_route)
app.use('/api/genres/:genreId', genres_route)

//Connect to database
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {console.log(`Server started on port ${process.env.PORT}`)})
    })
    .catch((error) => {
        console.log(error)
    })

    