function isUserValid(req, res, next) {
    try {
        const {email, password} = req.body;
        if (!email || !password) {
            throw new Error('email or password is not valid');
        }
        next();
    } catch (err) {
        console.log(err);
        res.status(400).send(err.message);
    }
}

module.exports = isUserValid;