const router = require('express').Router()
const { tvShows } = require('../db')

router.post('/tvShows', (req, res) => {
  tvShows.push(req.body.tvShow)
  res.sendStatus(200)
})

router.get('/tvShows', (req, res) => {
  res.json(tvShows)
})

module.exports = router
