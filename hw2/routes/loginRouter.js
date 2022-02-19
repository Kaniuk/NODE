const {Router} = require('express');
const users = require('../db/users');
const LoginController = require('../controllers/loginController');


const loginRouter = Router();

loginRouter.get('/', LoginController.renderLogin);

loginRouter.post('/',LoginController.checkLogin)


module.exports = loginRouter;