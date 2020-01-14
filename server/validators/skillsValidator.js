const validator = require('validator');
const validate = skills =>{
    let error ={}
   
    if(!skills.extra_skill){
        error.extra_skill = 'Please Provide Extra Skills';
    }
    if(!skills.progress_title){
        error.progress_title = 'Please Provide Progress Title';
    }

    if(!skills.progress_name){
        error.progress_name = 'Please Provide Progress Name';
    }
    
    if(!skills.progress){
        error.progress = 'Please Provide Progress';
    }else if(!validator.isNumeric(skills.progress)){
        error.progress = 'Input Numeric number please';
    }
    
    return{
        error,
        isValid:Object.keys(error).length == 0
    }
}

module.exports = validate;