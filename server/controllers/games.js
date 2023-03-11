const axios = require('axios')
const getToken = require('./token')


const getGamesData = async (req, res) => {
    const access_token = await getToken()
    try {
        const data = 'fields name, cover.*, websites.*, genres.*; where rating >= 60 & release_dates.date > 1577231999; limit 40;';
    
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
    } catch(err) {
        res.json({ status: "error", error: "Failed to connect" })
    }
}

module.exports = {
    getGamesData
}