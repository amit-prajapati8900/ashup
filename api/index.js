const express = require('express');
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo").default;
const app = express();
const ascynhanderler = require("./errorhandeler/ascynchronouse");
const ExpressError = require("./errorhandeler/expresserror");
const model2 = require("./model/models/model1");
const User = require("./model/models/user");
const cors = require("cors");

app.use(cors());
const path = require("path");
const jwt = require("jsonwebtoken"); 
const { verify } = require('crypto');
const { Session } = require('inspector');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser("secret"));
// app.use
// const session = require('express-session');
// const MongoStore = require('connect-mongo');

app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({
    mongoUrl: 'mongodb://127.0.0.1:27017/zaa',
    ttl: 60 // 14 days
  }),
  cookie: {
    secure: false,
    maxAge: 1000*60 // 1 day
  }
}));


function verifying (req, res, next){
    const authHeader =  req.headers['authorization'];
    if(!authHeader){
        return next(new ExpressError("authorization header not found",401));
    }
    const token  =  authHeader.split(' ')[1];
    if(!token){
        return next(new ExpressError("token not found",401));
    }
    try{
        const decoded = jwt.verify(token,'sectreat');
        req.user = decoded;
        next();
    } catch (err) {
        return next(new ExpressError("invalid token",401));
    }

}
app.post("/signup",async(req,res,next)=>{
    const {username,password,email} = req.body;
    const user = new User({username,password,email});
    if (!user) {
        return next(new ExpressError("data no live",500))
    }
    await user.save();
    res.json(`data is saved :${user.username}`);
});

app.post('/login', async (req, res, next) => {
  try {
    const { username, password, email } = req.body;
    const data = await User.findOne({ email });

    if (data && data.password === password && data.username === username) {
        const token = jwt.sign({id: data._id,username: data.username},'sectreat',{expiresIn: '1min'}); 
    res.json({ message: "login success", token });
    } else {
    next(new ExpressError("invalid username or password", 400));
    }
} catch (err) {
    next(new ExpressError("Error during login", 500));
}
});


app.get("/datas",verifying,async(req,res,next)=>{
    const data1 = await model2.find({});
    if(!data1){
        return next(new ExpressError("data not found",400));
    }
    res.json({message: 'data found', data1});
});
app.post("/sss",async(req, res,next) => {
        const {name,age} = req.body;
        const datas = new model2({name,age});
        if(!datas){
            return next(new ExpressError("data not found",404));
        }
        await datas.save();
        res.json({message:"save database"});
});

app.use((err,req,res,next)=>{
    let {statusCode=500,message="something went wrong"} = err;
    res.status(statusCode).send(message);
    // console.log(err.message,err.statusCode);
});

mongoose.connect("mongodb://127.0.0.1:27017/zaa")
.then(() => {
  console.log("MongoDB connected successfully");
  app.listen(5000, () => {
    console.log("Server is ready on port 5000");
  });
})