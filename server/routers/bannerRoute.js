const router = require('express').Router();
const {create} = require('../controller/bannerController');
const auth = require('../middleware/auth');
const {admin,supperadmin} = require('../middleware/admin');
const multer = require('multer');
const path = require('path');


//  const DIR = path.resolve(__dirname, '/nodeapp/portfolio/server/uploads/');
 const DIR = path.resolve(__dirname, '/xampp/htdocs/portfolio/server/uploads/');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      console.log(path);
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null,'-' + fileName)
    }
});

var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});

//get all authenicate user
// router.get('/auth', authnicateuser);
router.post('/create',auth, admin, upload.single('image'),  create);


module.exports = router;