const Contact = require("../models/Contact");
const nodemailer = require('nodemailer');
const { serverError, resourceError } = require("../utils/error");
 const contactValidator = require("../validators/contactValidator");
module.exports = {
  create(req, res, next) {
    let { fullname, email, organigation, subject, consult_date, budget, description, phone } = req.body;
    let status = 'unapprove';
    let validate = contactValidator({ fullname, email, subject, consult_date, budget, description, phone });


    if (!validate.isValid) {
      return res.status(400).json(validate.error);
    } else {

        let admin_mail =  process.env.ADMIN_MAIL;
        let admin_pass =  process.env.ADMIN_PASS;
        let host =  process.env.MAILHOST;
        let port =  process.env.MAILPORT;

        let transporter = nodemailer.createTransport({
            host: host,
            port: port,
            secure: false,
            requireTLS: true,
            auth: {
              user: admin_mail,
              pass: admin_pass
            }
          });
          
          let mailOptions = {
            from: email,
            to: admin_mail,
            subject: subject,
            text: description
          };
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                return resourceError(res, 'mail Not send');
            } else {

                let contacts = new Contact({
                    fullname,
                    email,
                    subject,
                    organigation,
                    consult_date,
                    budget,
                    description, 
                    phone,
                    status
                  });
                  contacts
                    .save()
                    .then(contact => {
                      res.status(201).json({
                        message: "Message send Successfully",
                        ...contact._doc
                      });
                    })
                    .catch(error => serverError(res, error));


            }
          });
      
    }
  },

  getAll(req, res, next) {
    Contact.find()
      .then(contact => {
        if (contact.length === 0) {
          res.status(200).json({
            message: "No Contact Found"
          });
        } else {
          res.status(200).json(contact);
        }
      })
      .catch(error => serverError(res, error));
  },

//   update(req, res) {
//     let { counterId } = req.params;

//     let { title, counter_number, counter_icon, duration, status } = req.body;

//     let user_id = req.user._id;
//     let validate = counterValidator({ title, counter_number, counter_icon, duration });

//     if (!validate.isValid) {
//         return res.status(400).json(validate.error);
//       } else { 
//     Counter.findOneAndUpdate(
//       { _id: counterId },
//       { title,
//         counter_number,
//         counter_icon,
//         duration,
//         status,
//         user_id},
//       { new: true }
//     )
//       .then(result => {
//         let { _id } = req.user;
//         Counter.find({ user_id: _id })
//           .then(counter => {
//             res.status(200).json({
//               message: "Update Successfully",
//               ...result._doc,
//               counters: counter
//             });
//           })
//           .catch(error => serverError(res, error));
//       })
//       .catch(error => serverError(res, error));

//     }
//   },

removeContact(req, res) {
    let { contactId } = req.params;
    Contact.findOneAndDelete({ _id: contactId })
      .then(result => {
        Contact.find()
          .then(contact => {
            res.status(200).json({
              message: "Deleted Successfully",
              ...result._doc,
              contacts: contact
            });
          })
          .catch(error => serverError(res, error));
      })
      .catch(error => serverError(res, error));
  }
};
