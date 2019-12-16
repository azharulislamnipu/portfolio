const validator = require('validator');
const validate = banner =>{
    let error ={}
   
    
    if(!banner.title){
        error.title = 'Please Provide Banner title';
    }
    if(!banner.description){
        error.description = 'Please Provide Banner Description';
    }

    if(!banner.cv){
        error.cv = 'Uplad Your Cv';
    }
    if(!banner.image){
        error.image = 'Uplad Banner image';
    }

    return{
        error,
        isValid:Object.keys(error).length == 0
    }
}

module.exports = validate;