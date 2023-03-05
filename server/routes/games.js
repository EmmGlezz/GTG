const express = require('express')
const router = express.Router()

const {
    getGamesData
} = require('../controllers/games')

router.get('/', getGamesData)

module.exports = router