const router = require('express').Router();
const {create} = require('../controller/bannerController');
const auth = require('../middleware/auth');
const {admin,supperadmin} = require('../middleware/admin');
const {upload,uploadany} = require('../utils/multer');
//get all authenicate user
// router.get('/auth', authnicateuser);
router.post('/create',auth, admin, uploadany(),  create);


module.exports = router;