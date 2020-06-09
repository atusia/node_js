const bcrypt = require('bcrypt');

module.exports = async (hashedPassword, password) => {
    const isPasswordsEquals = await bcrypt.compare(password, hashedPassword);

    if (!isPasswordsEquals) {
        throw new Error('User is not exist')
    }
};
