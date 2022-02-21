function isUserValid(req, res, next) {
    try {
        const {email, password} = req.body;
        if (!email || !password) {
            throw new Error('email or password is not valid');
        }
        next();
    } catch ({message}) {
        res.redirect(`/error?error=${message}`);
    }
}

module.exports = isUserValid;