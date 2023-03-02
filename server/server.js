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
// const URL = 'https://id.twitch.tv/oauth2/token?client_id=rp12vq3vzr3w42e7lzauu2pvhr2ul8&client_secret=l0jm3jo3ic1abtw20ye47hwbunq5bn&grant_type=client_credentials'



    
    // const data = await axios.post(URL)
    
    // axios({
    //     url: "https://api.igdb.com/v4/games",
    //     method: 'POST',
    //     headers: {
    //         'Accept': 'application/json',
    //         'Client-ID': 'rp12vq3vzr3w42e7lzauu2pvhr2ul8',
    //         'Authorization': 'Bearer mxtwqnyppu7b3nfd4drxx0wsw2q42o',
    //     },
    //     data: "fields age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,checksum,collection,cover,created_at,dlcs,expanded_games,expansions,external_games,first_release_date,follows,forks,franchise,franchises,game_engines,game_localizations,game_modes,genres,hypes,involved_companies,keywords,language_supports,multiplayer_modes,name,parent_game,platforms,player_perspectives,ports,rating,rating_count,release_dates,remakes,remasters,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites;"
    //   })
    //     .then(response => {
    //         console.log(response);
    //     })
    //     .catch(err => {
    //         console.error(err);
    //     });
    




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

        const data = 'fields name, screenshots;';

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

    