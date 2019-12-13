const Banner = require('../models/Banner');
const {serverError,resourceError} = require('../utils/error');
const bannerValidator = require('../validators/bannerValidator');
module.exports = {

   create(req, res, next ){

      let {  title, description, degination, cv , image} = req.body;
  
       let  user_id =  req.user._id
         const url = req.protocol + '://' + req.get('host');
       image = url+'/nodeapp/portfolio/server/uploads/'+image;
    
        let banner = new Banner({title, description, degination, cv, image, user_id})

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