const {Router} = require('express');
const users = require('../db/users');
const UserController = require('../controllers/userController');

const userRouter = Router();

userRouter.get('/', UserController.renderFilterUsers);


userRouter.get('/:userId', UserController.getUserById);

userRouter.post('/:userId/delete', UserController.deleteUser);

module.exports = userRouter;