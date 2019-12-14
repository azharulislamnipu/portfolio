const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const uploadImage = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    image: {
        type: String
    }
})

module.exports = mongoose.model('UploadImage', uploadImage)