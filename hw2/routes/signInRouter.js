const {Router} = require('express');
const users = require('../db/users');

const signInRouter = Router();

signInRouter.get('/', (req, res) => {
    res.render('signIn');
});

signInRouter.post('/', (req, res) => {
    const userInfo = req.body;

    const dbUserIndex = users.findIndex((user) => user.email === userInfo.email);
    if (dbUserIndex === -1) {
        res.redirect('/notFound');
        return;
    }
    const dbUser = users[dbUserIndex];

    if (userInfo.password !== dbUser.password) {
        res.redirect('/notFound');
        return;
    }

    res.redirect(`/users/${dbUserIndex + 1}`);
});

module.exports = signInRouter;