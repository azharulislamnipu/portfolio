const Counter = require('../models/Counter');
const {serverError,resourceError} = require('../utils/error');


module.exports = {

   create(req, res, next ){
  
 
        let {  title, countnumber, counter_icon } = req.body; 
        let  user_id =  req.user._id
    
            let counters = new Counter({title, countnumber, counter_icon, user_id});
       
            counters.save()
            .then(result => {
                      res.status(201).json({
                          message: 'Counter Created Successfully'
                      })
              
          })
          .catch(error => serverError(res, error))

    
    },


    getAll(req, res,next) {
        let {_id} = req.user;
        Counter.find({user_id: _id})
            .then(counter => {
                if (counter.length === 0) {
                    res.status(200).json({
                        message: 'No counter Found'
                    })
                } else {
                    res.status(200).json(counter)
                }
            })
            .catch(error => serverError(res, error))
    },

}