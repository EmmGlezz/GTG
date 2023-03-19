const axios = require("axios");
const getToken = require("./token");
require("dotenv").config();

const getGenres = async (req, res) => {
	const access_token = await getToken();
	try {
		const data = "fields name, cover.*, websites.*, genres.*, artworks.*, first_release_date, involved_companies.*, platforms.*, summary, websites.*, screenshots.*; limit 40;"

		const config = {
			method: "post",
			url: "https://api.igdb.com/v4/games",
			headers: {
				'Client-ID': `${process.env.CLIENT_ID}`,
				'Authorization': `Bearer ${access_token}`,
				'Content-Type': 'text/plain',
				'Cookie': '__cf_bm=oAq7169WV7Qr8Va_OfXq4dxG8GabjyDAupPTV2seA5w-1677674219-0-Af2KbkxX6K6Ryq6ITUpS3NmVL8OHoZ2N4pVbFMHPgRCSVKA8pov/BHTvnQckW2ItCr906OeACrOkVrWpHpCCvvA='
			},
			data : `${data} where genres = ${req.params.genreId} & cover != null & rating != null & artworks != null & websites != null; sort rating desc;`
		};
		console.log(req.params.genreId)

		const games = await axios(config);

		res.send(JSON.stringify(games.data));
	} catch (err) {
        console.log(err.message)
		res.json({ status: "error", error: "Failed to connect" });
	}
};

module.exports = {
	getGenres,
};
