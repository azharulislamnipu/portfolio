const multer = require('multer');
const path = require('path');
const DIR = path.resolve(__dirname, '../uploads/');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb( null, fileName );
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
     },

     multiUpload(image){
        return upload.array(image,10);
      },

      uploadany(){
        return upload.any();
      }
}