const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const userRoute = require('./routers/userRoute');
const bannerRoute = require('./routers/bannerRoute');
const passport = require('passport');
const app = express();
const multer = require('multer');
const path = require('path');
const auth = require('./middleware/auth');

require('dotenv').config();
mongoose.Promise = global.Promise;

app.use(morgan('combined'));
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser())
app.use(passport.initialize());
require('./utils/passport')(passport);


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.set('Content-Type', 'multipart/form-data');

    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
      return res.status(200).json({});
    }
    next();
  });

  
app.use('/api/users', userRoute);
app.use('/api/banner', bannerRoute);
app.get('/', (req, res)=>{
    res.send('Welcome to Server side');
})


 const DIR = path.resolve(__dirname, '/nodeapp/portfolio/server/uploads/');
// const DIR = path.resolve(__dirname, '/xampp/htdocs/portfolio/server/uploads/');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      console.log(path);
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null,'-' + fileName)
    }
});

var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});

let Banner = require('./models/Banner');

app.post('/user-profile', upload.single('image'), (req, res, next) => {



  const url = req.protocol + '://' + req.get('host')
  const banner = new Banner({
      title: req.body.title,
      name: req.body.name,
      description:req.body.description,
      image: url+'/'+req.file.filename,
      user_id: '234234'
  });
  banner.save().then(result => {
      res.status(201).json({
          message: "User registered successfully!"
        
      })
  }).catch(err => {
      console.log(err),
          res.status(500).json({
              error: err
          });
  })
})

let Product = require('./models/Product');
app.post('/createproduct',(req,res) => {


  console.log(req.body)

  const product = new Product(req.body)
  
  product.save((err,doc) =>{
    if(err) return res.json({
      success:false, err
    })
        res.status(200).json({
          message:'success',
          product: doc
      })
  });
 

} );

const PORT = process.env.PORT || 4000
app.listen(PORT,()=>{
    console.log(`server is running on PORT ${PORT}`);
    mongoose.connect(process.env.DATABASE,{useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true } , () => {
        console.log('Databese Connected ....');
    });
})