const express = require('express')
const app = express()
app.listen(3000);
//creating request from signup page//
const userAuth=express.Router();
app.use('/auth', userAuth);
app.use(express.json());
let UserData=[];

const getSignFrom=(req,res)=>{
    //signup from sending
    res.send('signup-form-client\src\Components\signup.jsx',{root:__dirname});
}

const postSignup=(req,res)=>{
    let data=req.body;
    console.log(req.body);
    res.json({
        message:"User signed up",
        Data:data,
    })
    UserData.push(data);


}

userAuth
.route("/signup")
.get(getSignFrom)
.post(postSignup)
// .patch(patchUser)
// .delete(deleteUser)


