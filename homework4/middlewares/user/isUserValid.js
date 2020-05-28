module.exports = async (req, res, next) => {
    try {
        const {name, email, password} = req.body;

        if (!name || !email || !password) {
            throw new Error('User is not valid')
        }

        if (password.length < 9) {
            throw new Error('Weak password')
        }

        next();

    } catch (e) {
        res.render('error', {message: e.message})
    }
};
