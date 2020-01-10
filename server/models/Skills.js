const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Skillschema = new Schema({
    extra_skills: {
        type: Array,
        trim:true,
        default:[]
    },
    professional_skills:[],
    programming_skills:[{
        programming_title: {
            type: String,
            trim:true
        },
        programming_progress_name: {
            type: String,
            trim:true
        },
        programming_progress: {
            type: Number,
            trim:true
        }
    }],
    language_skills:[{
        language_title: {
            type: String,
            trim:true
        },
        language_progress_name: {
            type: String,
            trim:true
        },
        language_progress: {
            type: Number,
            trim:true
        }
    }],
    status: {
        type: String,
        trim:true
    },
   
    user_id:{
        type: String,
    },
    create_at: {
        type: Date,
        default: Date.now
    },
});

const Skills = mongoose.model('Skills', Skillschema);

module.exports = Skills;