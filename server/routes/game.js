const express = require('express')
const router = express.Router({mergeParams: true})

const {
    getGameData
} = require('../controllers/game')

router.get('/', getGameData)

module.exports = router