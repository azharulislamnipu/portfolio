const router = require('express').Router();
const {create,getAll,remove} = require('../controller/bannerController');
const auth = require('../middleware/auth');
const {admin,supperadmin} = require('../middleware/admin');
const {upload,uploadany} = require('../utils/multer');
//get all authenicate user
// router.get('/auth', authnicateuser);
router.post('/',auth, admin, uploadany(),  create);
router.get('/',auth, admin,  getAll);
// router.get('/:bannerId', auth, getSingleTransaction)
// router.put('/:bannerId', auth, update)
router.delete('/:bannerId', auth, remove)

module.exports = router;