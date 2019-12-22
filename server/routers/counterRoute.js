const router = require('express').Router();
const {create,getAll} = require('../controller/counterController');
const auth = require('../middleware/auth');
const {admin,supperadmin} = require('../middleware/admin');
//get all authenicate user
// router.get('/auth', authnicateuser);
router.post('/counters',auth, admin, create);
router.get('/counters',auth, admin,  getAll);


module.exports = router;