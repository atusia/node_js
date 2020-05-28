const db = require('../dataBase').getInstance();

module.exports = {
    getUsers: () => {
        const UserModel = db.getModel('User');

        return UserModel.findAll({})
    },

    getSingleUser: (id) => {
        const UserModel = db.getModel('User');
        return UserModel.findByPk(id);
    },

    createUser: (user) => {
        const UserModel = db.getModel('User');
        return UserModel.create(user)
    },

    deleteUser: (id) => {
        const UserModel = db.getModel('User');
        return UserModel.destroy({where: {id}});
    },

    updateUser: (id, user) => {
        const UserModel = db.getModel('User');
        return UserModel.update(user, {where: {id}})
    }
};
