const {userService} = require('../../service');

module.exports = {
    createUser: async (req, res) => {
        try {
            await userService.createUser(req.body);
            res.end()
        } catch (e) {
            res.json(e)
        }
    },

    getAllUsers: async (req, res) => {
        try {
            const users = await userService.getUsers();

            res.json(users)
        } catch (e) {
            res.json(e)
        }
    },

    getSingleUser: async (req, res) => {
        try {
            const {id} = req.params;
            const user = await userService.getSingleUser(id);

            res.json(user)
        } catch (e) {
            res.json(e)
        }
    },

    updateUser: async (req, res) => {
        try {
            const {id} = req.params;
            const user = req.body;

            const [isUpdated] = await userService.updateUser(id, user);

            isUpdated ? res.sendStatus(200) : res.json({updated: false})
        } catch (e) {
            res.json(e)
        }
    },

    deleteUser: async (req, res) => {
        try {
            const {id} = req.params;
            const isDeleted = await userService.deleteUser(id);

            isDeleted ? res.sendStatus(204) : res.json({deleted: false});
        } catch (e) {
            res.json(e)
        }
    },
};
