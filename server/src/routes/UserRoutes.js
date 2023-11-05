const express = require('express');
const { LoginUser, RegisterUser, getUser, deleteUser } = require('../controllers/UserController');

const UserRouter=express.Router()


UserRouter.post('/login',LoginUser)
UserRouter.post('/register',RegisterUser)
UserRouter.get('/',getUser)
UserRouter.delete('/',deleteUser)

module.exports=UserRouter