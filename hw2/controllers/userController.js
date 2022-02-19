const users = require("../db/users");

class UserController {
    renderFilterUsers(req, res) {
        const query = req.query;
        let usersArray = [...users];
        if (query.city) {
            usersArray = usersArray.filter(user => user.city === query.city);
        }

        if (query.age) {
            usersArray = usersArray.filter(user => user.age === +query.age);
        }
        res.render('users', {users: usersArray});
    }

    getUserById(req, res) {
        const {userId} = req.params;
        const user = {
            ...users[userId - 1],
            id: userId,
        };
        // res.json(users[userId-1]);
        res.render('user', user);
    }

    deleteUser(req, res) {
        const {userId} = req.params;
        const deleteUserIndex = userId - 1;

        users.splice(deleteUserIndex, 1);

        res.redirect('/users');
    }
}

module.exports = new UserController();