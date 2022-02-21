function isAllDataEntered(req, res, next) {
    try {
        const {firstName, lastName, email, password, age, city} = req.body;
        if (!firstName || !lastName || !email || !password || !age || !city) {
            throw new Error('enter data in all fields');
        }
        next();
    } catch ({message}) {
        res.redirect(`/error?error=${message}`);
    }
}

module.exports = isAllDataEntered;