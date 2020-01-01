const About = require("../models/About");
const { serverError, resourceError } = require("../utils/error");
const aboutValidator = require("../validators/aboutValidator");
module.exports = {
  create(req, res, next) {
    const bodydata = JSON.parse(JSON.stringify(req.body));

    let {
      title,
      sub_title,
      about_info,
      name,
      email,
      phone,
      address,
      age,
      nationality,
      status,
      about_image_name
    } = bodydata;
    let about_image = bodydata.about_image_name
      .toLowerCase()
      .split(" ")
      .join("-");

    let about_image_url =
      req.protocol + "://" + req.get("host") + "/uploads/" + about_image;

    let validate = aboutValidator({
      title,
      sub_title,
      about_image,
      name,
      email,
      phone,
      address,
      age,
      nationality
    });

    if (!validate.isValid) {
      return res.status(400).json(validate.error);
    } else {
      let user_id = req.user._id;
      let about = new About({
        title,
        sub_title,
        about_image,
        about_image_url,
        about_info,
        bio: { name, email, phone, address, age, nationality },
        status,
        user_id
      });
      about
        .save()
        .then(abt => {
          res.status(201).json({
            message: "About Created Successfully",
            ...abt._doc
          });
        })
        .catch(error => serverError(res, error));
    }
  },
  
  getAll(req, res, next) {
    About.find()
      .then(about => {
        if (about.length === 0) {
          res.status(200).json({
            message: "No Banner Found"
          });
        } else {
          res.status(200).json(about);
        }
      })
      .catch(error => serverError(res, error));
  },

  getAboutDetails(req, res) {
    let { aboutId } = req.params;
    About.findById(aboutId)
      .then(about => {
        if (!about) {
          res.status(200).json({
            message: "No Transaction Found"
          });
        } else {
          res.status(200).json(about);
        }
      })
      .catch(error => serverError(res, error));
  },

  
  update(req, res, next) {
    let { aboutId } = req.params;

    const bodydata = JSON.parse(JSON.stringify(req.body));

    let {
        title,
        sub_title,
        about_info,
        name,
        email,
        phone,
        address,
        age,
        nationality,
        status,
        about_image_name
      } = bodydata;
      let about_image = bodydata.about_image_name
        .toLowerCase()
        .split(" ")
        .join("-");
  
      let about_image_url =
        req.protocol + "://" + req.get("host") + "/uploads/" + about_image;

console.log(bodydata);
console.log(req.body);


    let user_id = req.user._id;
    let validate = aboutValidator({
      title,
      sub_title,
      about_image,
      name,
      email,
      phone,
      address,
      age,
      nationality
    });

    if (!validate.isValid) {
        return res.status(400).json(validate.error);
      } else { 
    About.findOneAndUpdate(
      { _id: aboutId },
      {
        title,
        sub_title,
        about_image,
        about_image_url,
        about_info,
        bio: { name, email, phone, address, age, nationality },
        status,
        user_id
      },
      { new: true }
    )
      .then(result => {
        let { _id } = req.user;
        About.find({ user_id: _id })
          .then(about => {
            res.status(200).json({
              message: "Update Successfully",
              ...result._doc,
              Abouts: about
            });
          })
          .catch(error => serverError(res, error));
      })
      .catch(error => serverError(res, error));

    }
  },

  removeAbout(req, res) {
    let { aboutId } = req.params;

    About.findOneAndDelete({ _id: aboutId })
      .then(result => {
        let { _id } = req.user;
        About.find({ user_id: _id })
          .then(about => {
            res.status(200).json({
              message: "Deleted Successfully",
              ...result._doc,
              abouts: about
            });
          })
          .catch(error => serverError(res, error));
      })
      .catch(error => serverError(res, error));
  }
};
