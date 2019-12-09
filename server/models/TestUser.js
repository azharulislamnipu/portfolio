const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const testuserSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    profileImg: {
        type: String
    }
}, {
    collection: 'User'
})

module.exports = mongoose.model('Testuser', testuserSchema)