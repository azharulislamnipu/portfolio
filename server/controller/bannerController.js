const Banner = require('../models/Banner');
const {serverError,resourceError} = require('../utils/error');
const bannerValidator = require('../validators/bannerValidator');

module.exports = {

   create(req, res, next ){
    const bodydata = JSON.parse(JSON.stringify(req.body));
 
        let {  title, description , designation} = bodydata; 
        let  user_id =  req.user._id
        let cv = bodydata.cvname;
        let image = bodydata.imagename;

        let validate = bannerValidator({ title, description , designation, cv, image})
  
        if(!validate.isValid){
            return res.status(400).json(validate.error);
        }else{
            let banner = new Banner({title, description, designation, cv, image, user_id});
       
            banner.save()
            .then(result => {
                      res.status(201).json({
                          message: 'Banner Created Successfully'
                      })
              
          })
          .catch(error => serverError(res, error))

        }
       

      
   


    }

}