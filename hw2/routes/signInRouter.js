const {Router} = require('express');
const users = require('../db/users');
const SignInController = require('../controllers/signInController');


const signInRouter = Router();

signInRouter.get('/', SignInController.renderSignIn);

signInRouter.post('/', SignInController.findUserSignIn);

module.exports = signInRouter;