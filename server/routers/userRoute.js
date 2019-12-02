const router = require('express').Router();
const {login, register,authnicateuser} = require('../controller/userController');
const auth = require('../middleware/auth');
const {admin,supperadmin} = require('../middleware/admin');

//get all authenicate user
// router.get('/auth', authnicateuser);
router.post('/register', register);
router.post('/login',login);
router.post('/recoveryPassword',auth,(req, res) =>{
    res.json({
        message:'Hello this is recoveryPassword'
    })
});
router.post('/dashboard',auth,(req, res) =>{
    res.json({
        message:'dashboard'
    })
});
module.exports = router;

//register
//login
//password recovery


//users
//delete user
//update user
