const validator = require('validator');
const progValidate = skills =>{
    let error ={}

    if(!skills.programming_lang_title){
        error.programming_lang_title = 'Please Provide programming lang Title';
    }

    if(!skills.programming_lang_name){
        error.programming_lang_name = 'Please Provide programming lang Name';
    }
    
    if(!skills.programming_lang_progress){
        error.programming_lang_progress = 'Please Provide programming lang Progress';
    }else if(!validator.isNumeric(skills.programming_lang_progress)){
        error.programming_lang_progress = 'Input Numeric number please';
    }
    
    return{
        error,
        isValid:Object.keys(error).length == 0
    }
}

module.exports = progValidate;