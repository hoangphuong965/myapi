const express = require('express');
const router = express.Router();
const UsersController = require('../controllers/usersController');
const checkAuth = require('../middleware/checkAuth');

router.post('/signup', UsersController.signup());

router.post('/login', UsersController.login());

router.patch('/update/:id', checkAuth ,UsersController.update());

router.get('/loggedInUser', UsersController.loggedInUser());


module.exports = router;