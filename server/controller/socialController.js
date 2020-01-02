const Social = require("../models/Social");
const { serverError, resourceError } = require("../utils/error");
const socialValidator = require("../validators/socialValidator");

module.exports = {
    create(req, res, next) {
        let { title,
            type,
            social_icon,
            social_tag,
            social_link, status } = req.body;
        let user_id = req.user._id;
        let validate = socialValidator({ title,
            type,
            social_icon,
            social_tag,
            social_link });
    
        if (!validate.isValid) {
          return res.status(400).json(validate.error);
        } else {
          let socials = new Social({
            title,
            type,
            social_icon,
            social_tag,
            social_link,
            status,
            user_id
          });
          socials
            .save()
            .then(social => {
              res.status(201).json({
                message: "Counter Created Successfully",
                ...social._doc
              });
            })
            .catch(error => serverError(res, error));
        }
      },
}