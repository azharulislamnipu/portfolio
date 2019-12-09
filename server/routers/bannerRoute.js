const router = require('express').Router();
const {createBanner} = require('../controller/bannerController');
const auth = require('../middleware/auth');
const {admin,supperadmin} = require('../middleware/admin');

//get all authenicate user
// router.get('/auth', authnicateuser);
router.post('/create',auth,admin, createBanner);



module.exports = router;