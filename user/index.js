const express = require('express')
const router = express.Router()
const UserController = require('./user.controller')
router.post('/register', async(req,res) =>{
    const [status, message, data] =await UserController.register(req.body);
    return res.status(status).send({message,data})
})
router.post('/login', async(req,res) =>{
    const [status, message, data] =await UserController.login(req.body);
    return res.status(status).send({message,data})
})

module.exports = {router}