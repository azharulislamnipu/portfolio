const validator = require('validator');
const validate = portfolio =>{
    let error ={}
   
    if(!portfolio.title){
        portfolio.title = 'Please Provide about title';
    }
     

    return{
        error,
        isValid:Object.keys(error).length == 0
    }
}

module.exports = validate;