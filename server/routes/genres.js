const express = require('express')
const router = express.Router({mergeParams: true})

const {
    getGenres
} = require('../controllers/genres')

router.get('/', getGenres)

module.exports = router