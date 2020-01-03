const router = require('express').Router();
const {create, getAll} = require('../controller/contactController');
const auth = require('../middleware/auth');
const {admin,supperadmin} = require('../middleware/admin');

router.post('/', create);
router.get('/', getAll);
// router.put('/:contactId', auth, admin, update)
// router.delete('/:contactIdId', auth, admin, removeCounter)
module.exports = router;