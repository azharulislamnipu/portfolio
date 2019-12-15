const Banner = require('../models/Banner');
const {serverError,resourceError} = require('../utils/error');
const bannerValidator = require('../validators/bannerValidator');
module.exports = {

   create(req, res, next ){
    const bodydata = JSON.parse(JSON.stringify(req.body))
        let {  title, description, degination, cv, cvname, image, imagename } = bodydata; 
        let  user_id =  req.user._id
        let banner = new Banner({title, description, degination, cvname, imagename, user_id});
        banner.save()
        .then(result => {
                  res.status(201).json({
                      message: 'Banner Created Successfully',
                      Banner: result
                  })
          
      })
      .catch(error => serverError(res, error))
      
   


    }

}