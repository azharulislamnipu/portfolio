const router = require('express').Router();
const {create,getAll,removeCounter, update} = require('../controller/counterController');
const auth = require('../middleware/auth');
const {admin,supperadmin} = require('../middleware/admin');
//get all authenicate user
// router.get('/auth', authnicateuser);
router.post('/',auth, admin, create);
router.get('/',auth, admin,  getAll);
router.put('/:counterId', auth, update)
router.delete('/:counterId', auth, removeCounter)
module.exports = router;