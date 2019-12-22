const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const userRoute = require('./routers/userRoute');
const bannerRoute = require('./routers/bannerRoute');
const counterRoute = require('./routers/counterRoute');
const passport = require('passport');
const app = express();
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
app.use('/api', bannerRoute);
app.use('/api', counterRoute);
app.get('/', (req, res)=>{
    res.send('Welcome to Server side');
});


const PORT = process.env.PORT || 4000
app.listen(PORT,()=>{
    console.log(`server is running on PORT ${PORT}`);
    mongoose.connect(process.env.DATABASE,{useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true } , () => {
        console.log('Databese Connected ....');
    });
})