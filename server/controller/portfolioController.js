const Portfolio = require("../models/Portfolio");
const { serverError, resourceError } = require("../utils/error");
const portfolioValidator = require("../validators/portfolioValidator");
module.exports = {
  create(req, res, next) {
    const bodydata = JSON.parse(JSON.stringify(req.body));
    let {
      title,
      description,
      type,
      feature_image_name,
      feature_image,
      gellary_image_name,
      gellary_image,
      client_name,
      created_by,
      completed_date,
      skills,
      status
    } = bodydata;

    feature_image = bodydata.feature_image_name;
    let gellary = bodydata.gellary_image_name;

    let image_url = req.protocol + "://" + req.get("host") + "/uploads/";

    let validate = portfolioValidator({
      title,
      description,
      type,
      feature_image,
      client_name,
      created_by,
      completed_date,
      skills
    });


    if (!validate.isValid) {
      return res.status(400).json(validate.error);
    } else {
      let user_id = req.user._id;
      let portfolio = new Portfolio({
        title,
        description,
        type,
        feature_image,
        image_url,
        gellary,
        client_name,
        created_by,
        completed_date,
        skills,
        status,
        user_id
      });
      portfolio
        .save()
        .then(portfo => {
          res.status(201).json({
            message: "Portfolio Created Successfully",
            ...portfo._doc
          });
        })
        .catch(error => serverError(res, error));
    }
  },

  getAll(req, res, next) {
    Portfolio.find()
      .then(portfolio => {
        if (portfolio.length === 0) {
          res.status(200).json({
            message: "No About Found"
          });
        } else {
          res.status(200).json(portfolio);
        }
      })
      .catch(error => serverError(res, error));
  },

  update(req, res, next) {
    let { portfolioId } = req.params;

    const bodydata = JSON.parse(JSON.stringify(req.body));
    let {
      title,
      description,
      type,
      feature_image_name,
      feature_image,
      current_feature_image,
      gellary_image_name,
      gellary_image,
      client_name,
      created_by,
      completed_date,
      skills,
      status
    } = bodydata;
    let gellary;
    if(feature_image_name === ''){
      feature_image = bodydata.current_feature_image;
    }else{
      feature_image = bodydata.feature_image_name;
    }

    if(gellary_image_name === undefined ){
       gellary = bodydata.current_feature_image;
    }else{
       gellary = bodydata.gellary_image_name;
    }



    let image_url = req.protocol + "://" + req.get("host") + "/uploads/";


    let user_id = req.user._id;
    let validate = portfolioValidator({
      title,
      description,
      type,
      feature_image,
      client_name,
      created_by,
      completed_date,
      skills
    });

    if (!validate.isValid) {
      return res.status(400).json(validate.error);
    } else {

      Portfolio.findOneAndUpdate(
        { _id: portfolioId },
        {
          title,
          description,
          type,
          feature_image,
          image_url,
          gellary,
          client_name,
          created_by,
          completed_date,
          skills,
          status,
          user_id
        },
        { new: true }
      )
        .then(result => {
          let { _id } = req.user;
          Portfolio.find({ user_id: _id })
            .then(portfolio => {
              res.status(200).json({
                message: "Update Successfully",
                ...result._doc,
                portfolios: portfolio
              });
            })
            .catch(error => serverError(res, error));
        })
        .catch(error => serverError(res, error));
    }
  },

  removePortfolio(req, res) {
    let { portfolioId } = req.params;

    Portfolio.findOneAndDelete({ _id: portfolioId })
      .then(result => {
        let { _id } = req.user;
        Portfolio.find({ user_id: _id })
          .then(portfolio => {
            res.status(200).json({
              message: "Deleted Successfully",
              ...result._doc,
              portfolios: portfolio
            });
          })
          .catch(error => serverError(res, error));
      })
      .catch(error => serverError(res, error));
  }
};
