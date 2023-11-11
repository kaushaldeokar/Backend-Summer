const express = require("express");
const app = express();
const mongoose = require("mongoose");
const emailValidator = require("email-validator");
const cookieParser=require('cookie-parser');

app.use(cookieParser());
app.use(express.json());
app.listen(3000, () => {
  console.log("Listening to Port 3000");
});

const userRouter = express.Router();
app.use("/user", userRouter);



async function getUser(req, res) {
  let userData = await userModel.find();
  res.json({
    message: "userData is Recieved",
    UserData: userData,
  });
}

async function postUser(req, res) {
  console.log(req.body);
  let dataObj = await userModel.create(req.body);
  res.json({
    message: "Recieved",
    UserAdded: dataObj,
  });
}

async function patchUser(req, res) {
  let dataToBeUpdated = req.body;
  let user = await userModel.findOneAndUpdate(
    { Email: dataToBeUpdated.Email },
    dataToBeUpdated
  );
  res.json({
    message: "Data Updated",
    UpdatedData: user,
  });
}

async function deleteUser(req, res) {
  let email = req.body;
  let Deleted = await userModel.findOneAndDelete(email);
  res.json({
    message: "Data Deleted",
    DeletedData: Deleted,
  });
}

function getUserByParams(req, res) {
  console.log(req.params.username);
  console.log(req.params);
  res.send("userName is recieved");
}

const setCookies = (req, res) => {
  res.cookie('isLoggedIn',true,{maxAge:60*60*24*1000,secure:true,httpOnly:true});
  res.send('cookies are set');
};
const getCookies = (req, res) => {
    console.log(req.cookie);
};
let f=false;

const protectRoute=(req,res,next)=>{
    if(f){
        next();
    }else{
        return res.json({
            message:"not allowed operation",
        })
    }
}

userRouter
  .route("/")
  .get(protectRoute,getUser)
  .post(postUser)
  .patch(patchUser)
  .delete(deleteUser);

// userRouter.route("/:username").get(getUserByParams);



//cookie router
userRouter.route('/getCookies').get(getCookies);
userRouter.route('/setCookies').get(setCookies);

//promise based //
const db_link =
  "mongodb+srv://kaushal:kaushal@learn-mongodb.fhwtovl.mongodb.net/";
mongoose
  .connect(db_link)
  .then((db) => {
    console.log(db);
    console.log("db Connected");
  })
  .catch((err) => {
    console.log(err);
  });

const UserSchema = mongoose.Schema({
  FullName: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
    validate: function () {
      //here also we donot used arrow function as keyword is not contained in them//
      return emailValidator.validate(this.Email);
    },
  },
  Password: {
    type: String,
    required: true,
  },
  ConfirmPassword: {
    type: String,
    required: true,
    validate: function () {
      return this.Password === this.ConfirmPassword;
    },
  },
});

//yaha
UserSchema.pre("save", function () {
  console.log("before Saving", this);
  this.confirmPassWord = undefined;
});

UserSchema.post("save", function (doc) {
  console.log("before Saving", doc);
});

//model//
//name//
const userModel = mongoose.model("userModel", UserSchema);

// const createUser=async ()=>{
//     const user={
//         FullName:"Kaushal Deokar",
//         Email:"kaushal.deokar@gmail.com",
//         PassWord:"1234",
//         confirmPassWord:"1234"
//     }

//     //model ke andar function hote h uuse humlog data base me push krte h//
//     // and woh functions promised based hote h
//     let data=await userModel.create(user);
//     console.log(data);

// }
// createUser();

module.exports = { userModel };

// const {Deletedata}=require('./empty_data');
// Deletedata();
