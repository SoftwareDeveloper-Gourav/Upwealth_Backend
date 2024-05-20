const {Router} = require('express');
const {userSignup,userLogin} = require('../controllers/user');

const userRouter = Router();

// ROUTES 

userRouter.post('/signup',userSignup);
userRouter.post('/signin',userLogin);
module.exports = userRouter;