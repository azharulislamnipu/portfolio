const router = require('express').Router();
const {create, getAll, removePortfolio, update} = require('../controller/aboutController');
const auth = require('../middleware/auth');
const {admin,supperadmin} = require('../middleware/admin');
const {upload,uploadany} = require('../utils/multer');
//get all authenicate user
// router.get('/auth', authnicateuser);
 
//get all authenicate user
// router.get('/auth', authnicateuser);
router.post('/',auth, admin, uploadany(), create);
router.get('/',  getAll);
// router.get('/:aboutId', getAboutDetails);
router.put('/:aboutId', auth, admin, uploadany(), update);
router.delete('/:aboutId', auth, admin, removePortfolio);
module.exports = router;