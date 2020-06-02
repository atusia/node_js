const {Router} = require('express');

const userRouter = Router();

const {userController} = require('../../controllers');
const {isUserExists, isUserValid} = require('../../middlewares');

userRouter.post('/', isUserValid, userController.createUser);

userRouter.post('/auth', userController.loginUser);

userRouter.get('/', userController.getAllUsers);

userRouter.use('/:id', isUserExists);

userRouter.get('/:id', userController.getSingleUser);

userRouter.put('/:id', isUserValid, userController.updateUser);

userRouter.delete('/:id', userController.deleteUser);

module.exports = userRouter;
