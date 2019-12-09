const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BannerSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim:true
    },
    description: {
        type: String
    },
    degination: {
        type: Array,
        required: true,
        trim:true,
        default:[]
    },
    cv: {
        type: String
       },
    image: {
        type: String
    },
    user_id:{
        type: String,
    },
    create_at: {
        type: Date,
        default: Date.now
    },
});

const Banner = mongoose.model('Banner', BannerSchema);

module.exports = Banner;