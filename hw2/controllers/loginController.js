const users = require("../db/users");

class LoginController {
    renderLogin(req, res) {
        res.render('login');
    }

    checkLogin(req, res) {
        const user = req.body;

        const isEmailExist = users.some((registerUser) => registerUser.email === user.email);
        if (isEmailExist) {
            res.redirect('/notFound');
        } else {
            users.push(user);
            res.redirect('/users');
        }
    }
}

module.exports = new LoginController();