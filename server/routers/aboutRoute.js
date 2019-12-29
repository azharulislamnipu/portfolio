const router = require('express').Router();
const {create,getAll,removeCounter, update} = require('../controller/aboutController');
const auth = require('../middleware/auth');
const {admin,supperadmin} = require('../middleware/admin');
//get all authenicate user
// router.get('/auth', authnicateuser);
router.post('/',auth, admin, create);
// router.get('/',auth, admin,  getAll);
router.get('/', getAll);
router.put('/:aboutId', auth, update)
router.delete('/:aboutId', auth, removeCounter)
module.exports = router;