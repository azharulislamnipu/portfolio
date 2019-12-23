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
        var image_url = req.protocol + '://' + req.get('host');
        console.log(image_url);

        let validate = bannerValidator({ title, description , designation, cv, image})
  
        if(!validate.isValid){
            return res.status(400).json(validate.error);
        }else{
            let banner = new Banner({title, description, designation, cv, image, image_url, user_id});
       
            banner.save()
            .then(result => {
                      res.status(201).json({
                          message: 'Banner Created Successfully'
                      })
              
          })
          .catch(error => serverError(res, error))

        }

    },


    getAll(req, res,next) {
        let {_id} = req.user;
        Banner.find({user_id: _id})
            .then(banner => {
                if (banner.length === 0) {
                    res.status(200).json({
                        message: 'No Banner Found'
                    })
                } else {
                    res.status(200).json(banner)
                }
            })
            .catch(error => serverError(res, error))
    },

}