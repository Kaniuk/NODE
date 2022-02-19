const {Router} = require('express');
const users = require('../db/users');

const loginRouter = Router();

loginRouter.get('/', (req, res) => {
    res.render('login');
});

loginRouter.post('/', (req, res) => {
    const user = req.body;

    const isEmailExist = users.some((registerUser) => registerUser.email === user.email);
    if (isEmailExist) {
        res.redirect('/notFound');
    } else {
        users.push(user);
        res.redirect('/users');
    }
});


module.exports = loginRouter;