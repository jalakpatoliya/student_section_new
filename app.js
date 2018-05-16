 //==============================================================================
//======================  Importing dependencies  ==================================
//==============================================================================
var  express               = require("express"),
     app                   = express(),
     bodyParser            = require("body-parser"),
     passport              = require("passport"),
     LocalStrategy         = require("passport-local"),
     passportLocalMongoose = require("passport-local-mongoose"),
     expressSession        = require("express-session"),
     mongoose              = require("mongoose"),
     mongoXlsx             = require("mongo-xlsx"),
     multer                = require("multer"),
     storage               = multer.diskStorage(
      {
        destination: function (req, file, cb) {cb(null, 'uploads/')},
        filename: function (req, file, cb) {cb(null, file.originalname)}
      });
var upload = multer({ storage: storage });
//==============================================================================
//======================  connecting database  ==================================
//==============================================================================
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/demo3",function(err,data){
  if(err){console.log("connection error",err);}
  else{console.log("connection sucessful");}
});

//==============================================================================
//======================  Importing models  ==================================
//==============================================================================
var Students  = require("./models/student"),
    User       = require("./models/user"),
    TempUser   = require('./models/tempUser');
    Scheme     = require('./models/Scheme');
//==============================================
//===================Using body parser==========
//==============================================
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(express.static(__dirname+"/public"));
//============================================================================
//===================== acquiring router =====================================
//============================================================================
var indexRoute   = require('./routes/index'),
    searchRoute  = require('./routes/search'),
    show         = require('./routes/show'),
    showError    = require('./routes/error'),
    edit         = require('./routes/edit'),
    filt         = require('./routes/customsearch'),
    userRoute    = require('./routes/userRoute')
    notify       = require('./routes/admin/notify'),
    redirect     = require('./routes/redirect'),
    welcome      = require("./routes/welcome"),
    uploads      = require('./routes/student/uploads'),
   insertScheme  = require('./routes/admin/insertSchema'),
   receipts      =require('./routes/user/receipts');
   searchScheme  =require('./routes/user/searchScheme');

//=========================================================
//=============Initializing Session & Passport=============
//=========================================================
app.use(expressSession({
  secret:"Rusty is the best dog in the world", // is used to enco-deco information in the session
  resave:false,
  saveUninitialized:false
}))
app.use(passport.initialize()); // always needed to use the passport methods
app.use(passport.session());
//===========================================================
//== This function will run in all the routes as middleware =
//== The currentUser will be available in all the templates =
//===========================================================
app.use(function (req,res,next) {
  res.locals.currentUser = req.user;
  next();
});
app.use(indexRoute);
app.use(searchRoute);
app.use(showError);
app.use(filt);
app.use(edit);
app.use(userRoute);
app.use(notify);
app.use(redirect);
app.use(welcome);
app.use(show);
app.use(uploads);
app.use(insertScheme);
app.use(receipts);
app.use(searchScheme);
//=========================================================
//============= To create Admin ===========================
//=========================================================
User.register(new User({username:"jalak",role:"admin"}),"pass",function(err,user){})
//============================================================================
//====================== rough data ==========================================
//============================================================================
// Students.create({
//   _id:150160702013,
//   cur_sem:8
// },function(err,data){
//   if(err){console.log("insertio failed");}
//   else{console.log("sucessfully inserted");}
// })
//============================================================================
//============================================================================
//===========================================================================
//============================================================================
//===============Notifications count available throughout the app=============
//============================================================================
TempUser.find({},function(err,data){
  if (err) {
    console.log(err);
  } else {
    var x=0;
    data.forEach(function(element){
      x=x+1;
    })
    global.n=x;
  }
})
//============================================================================
//============================================================================
//===========================================================================
app.listen(3823,function(){
  console.log("server started at 3823");
})
