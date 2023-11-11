const express=require('express');
const app=express();

app.use(express.json());

const AuthRouter=express.Router();

const signUp=(req,res)=>{

    console.log(req.body);
    res.json({
        msg:"recieved",
    })
}
AuthRouter.route('/')
.post(signUp)


module.exports={AuthRouter};