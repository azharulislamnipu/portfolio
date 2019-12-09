const validator = require('validator');
const validate = banner =>{
    let error ={}
    if(!banner.title){
        error.title = 'Please Provide Banner title';
    }
    if(!banner.degination){
        error.degination = 'Please Provide  degination';
    }
    if(!banner.image){
        error.image = 'Uplad Banner image';
    }
    if(!banner.user_id){
        error.user_id = 'Please Provide user id';
    }
    return{
        error,
        isValid:Object.keys(error).length == 0
    }
}

module.exports = validate;