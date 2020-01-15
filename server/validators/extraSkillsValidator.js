const validator = require('validator');
const extraSkillvalidate = extraskills =>{
    let error ={}
   
    if(!extraskills.extra_skill){
        error.extra_skill = 'Please Provide Extra Skills';
    }
   
    return{
        error,
        isValid:Object.keys(error).length == 0
    }
}

module.exports = extraSkillvalidate;