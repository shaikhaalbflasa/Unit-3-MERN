const express = require('express')
const router = express.Router()
const usersController = require('../controllers/users')


router.get('/users', usersController.getAllUsers)

router.post('/users', usersController.createUser)

router.post('/users/:userId', usersController.createUserTweet)

router.put('/users/:userId', usersController.updateUser)

router.delete('/users/:userId', usersController.deleteUser)

router.post('/auth/singin', usersController.auth_singin_post)



module.exports = router