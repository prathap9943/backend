const express = require('express')
const router = express()
const User = require('../user')
router.get('/',(req,res) => {
    res.status(200).send("Backend Conncted")
})
router.use('/users',User.router);

module.exports = router