const axios = require('axios')
require('dotenv').config()


const getToken = async () => {
    const response = await axios.post(`https://id.twitch.tv/oauth2/token?client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&grant_type=client_credentials`)
    const access_token = response.data.access_token
    return access_token
}

// const access_token = getToken()

module.exports = getToken