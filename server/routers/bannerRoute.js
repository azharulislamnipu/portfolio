const router = require('express').Router();
const {create,getAll} = require('../controller/bannerController');
const auth = require('../middleware/auth');
const {admin,supperadmin} = require('../middleware/admin');
const {upload,uploadany} = require('../utils/multer');
//get all authenicate user
// router.get('/auth', authnicateuser);
router.post('/banners',auth, admin, uploadany(),  create);
router.get('/banners',auth, admin,  getAll);


module.exports = router;