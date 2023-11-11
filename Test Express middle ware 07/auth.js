import express from 'express'
import bodyParser from 'body-parser';
const app = express();

const AuthRouter=express.Router();
const signUp=(req,res)=>{

    console.log(req.body);
    res.json({
        msg:"recieved",
    })
}

AuthRouter.route('/')
.post(signUp)
export default AuthRouter;