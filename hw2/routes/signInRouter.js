const {Router} = require('express');
const users = require('../db/users');
const SignInController = require('../controllers/signInController');
const signInMiddleware = require('../middleware/isUserValid')


const signInRouter = Router();

signInRouter.get('/', SignInController.renderSignIn);

signInRouter.post('/',signInMiddleware, SignInController.findUserSignIn);

module.exports = signInRouter;