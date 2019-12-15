const multer = require('multer');
const path = require('path');
const DIR = path.resolve(__dirname, '/nodeapp/portfolio/server/uploads/');
// const DIR = path.resolve(__dirname, '/xampp/htdocs/portfolio/server/uploads/');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb( null, `${ Date.now() }-${ fileName }` );
    }
});

var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {

        if (file.mimetype == "image/png" || file.mimetype == "application/pdf" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and, pdf .jpeg format allowed!'));
        }
    }
});

module.exports = {
     upload(image){
       return upload.single(image);
     }
}