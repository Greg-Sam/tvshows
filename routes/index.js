const router = require('express').Router()

router.use('/api', require('./tvShowRoutes.js'))

module.exports = router
