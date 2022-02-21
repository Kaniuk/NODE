const {Router} = require('express');
const userRouter = require('./userRouter');
const loginRouter = require('./loginRouter');
const signInRouter = require('./signInRouter');

const routes = Router();

routes.use('/users', userRouter);
routes.use('/login', loginRouter);
routes.use('/signIn', signInRouter);

routes.get('/error', ({ query }, res) => {
    res.render('error', { error: query.error });
});

module.exports = routes;