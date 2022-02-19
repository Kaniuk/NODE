const {Router} = require('express');
const users = require('../db/users');

const userRouter = Router();

userRouter.get('/', (req, res) => {
    const query = req.query;
    let usersArray = [...users];
    if (query.city) {
        usersArray = usersArray.filter(user => user.city === query.city);
    }

    if (query.age) {
        usersArray = usersArray.filter(user => user.age === +query.age);
    }
    res.render('users', {users: usersArray});
});

userRouter.get('/:userId', (req, res) => {
    const {userId} = req.params;
    const user = {
        ...users[userId - 1],
        id: userId,
    };
    // res.json(users[userId-1]);
    res.render('user', user);
});

userRouter.post('/:userId/delete', (req, res) => {
    const {userId} = req.params;
    const deleteUserIndex = userId - 1;

    users.splice(deleteUserIndex, 1);

    res.redirect('/users');
});

module.exports = userRouter;