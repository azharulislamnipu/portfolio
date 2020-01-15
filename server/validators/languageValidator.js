const validator = require('validator');
const langValidate = skills =>{
    let error ={}

    if(!skills.lang_title){
        error.lang_title = 'Please Provide language Title';
    }

    if(!skills.lang_name){
        error.lang_name = 'Please Provide language Name';
    }
    
    if(!skills.lang_progress){
        error.lang_progress = 'Please Provide language Progress';
    }else if(!validator.isNumeric(skills.lang_progress)){
        error.lang_progress = 'Input Numeric number please';
    }
    
    return{
        error,
        isValid:Object.keys(error).length == 0
    }
}

module.exports = langValidate;