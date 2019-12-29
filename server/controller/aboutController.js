const About = require("../models/About");
const { serverError, resourceError } = require("../utils/error");
const aboutValidator = require("../validators/aboutValidator");
module.exports = {
    create(req, res, next) {

        
        let { title, sub_title, about_image,
            about_info, name, email, phone, address, age, nationality, social_icon, social_link, status } = req.body;
            let about_image_url = req.protocol + '://' + req.get('host')+'/uploads/'+about_image;
            console.log(about_image_url);


        let validate = aboutValidator({ title, sub_title, about_image, about_image_url, name, email, phone, address, age, nationality, social_icon, social_link})

        if (!validate.isValid) {
            return res.status(400).json(validate.error);
        } else {


            let user_id = req.user._id;
            let about = new About({
                title, sub_title, about_image, about_image_url, about_info, bio: { name, email, phone, address, age, nationality }, social_info: {
                    social_icon, social_link
                }, status, user_id
            });
            about.save()
                .then(abt => {
                    res.status(201).json({
                        message: 'About Created Successfully',
                        ...abt._doc,
                    })

                })
                .catch(error => serverError(res, error))
        }


    },

    getAll(req, res, next) {
        // let { _id } = req.user;
        Counter.find()
            .then(counter => {
                if (counter.length === 0) {
                    res.status(200).json({
                        message: "No counter Found"
                    });
                } else {
                    res.status(200).json(counter);
                }
            })
            .catch(error => serverError(res, error));
    },

    update(req, res) {
        let { counterId } = req.params;

        let { title, counter_number, counter_icon, duration, status } = req.body;
        let user_id = req.user._id;
        let validate = counterValidator({ title, counter_number, counter_icon, duration });

        if (!validate.isValid) {
            return res.status(400).json(validate.error);
        } else {
            Counter.findOneAndUpdate(
                { _id: counterId },
                {
                    title,
                    counter_number,
                    counter_icon,
                    duration,
                    status,
                    user_id
                },
                { new: true }
            )
                .then(result => {
                    let { _id } = req.user;
                    Counter.find({ user_id: _id })
                        .then(counter => {
                            res.status(200).json({
                                message: "Update Successfully",
                                ...result._doc,
                                counters: counter
                            });
                        })
                        .catch(error => serverError(res, error));
                })
                .catch(error => serverError(res, error));

        }
    },

    removeCounter(req, res) {
        let { counterId } = req.params;

        Counter.findOneAndDelete({ _id: counterId })
            .then(result => {
                let { _id } = req.user;
                Counter.find({ user_id: _id })
                    .then(counter => {
                        res.status(200).json({
                            message: "Deleted Successfully",
                            ...result._doc,
                            counters: counter
                        });
                    })
                    .catch(error => serverError(res, error));
            })
            .catch(error => serverError(res, error));
    }
};
