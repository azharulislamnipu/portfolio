const validator = require('validator');
const validate = portfolio =>{
    let error ={}
    if(!portfolio.title){
        error.title = 'Please Provide portfolio title';
    }

    if(!portfolio.description){
        error.description = 'Please Provide portfolio description';
    }

    if(!portfolio.type){
        error.type = 'Please select  portfolio type';
    }

    if(!portfolio.feature_image){
        error.feature_image = 'Please Upload Feature Image';
    }

    if(!portfolio.client_name){
        error.client_name = 'Please Provide client name';
    }
    if(!portfolio.created_by){
        error.created_by = 'Please Provide Created By';
    }

    if(!portfolio.completed_date){
        error.completed_date = 'Please Provide completed date';
    }
    if(!portfolio.skills){
        error.skills = 'Please Provide skills';
    }
    return{
        error,
        isValid:Object.keys(error).length == 0
    }
}

module.exports = validate;