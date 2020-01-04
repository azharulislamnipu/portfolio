const router = require('express').Router();
const {create, getAll, removeContact} = require('../controller/contactController');
const auth = require('../middleware/auth');
const {admin,supperadmin} = require('../middleware/admin');

router.post('/', create);
router.get('/', getAll);
// router.put('/:contactId', auth, admin, update)
router.delete('/:contactId', auth, admin, removeContact)
module.exports = router;