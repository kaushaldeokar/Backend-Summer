import express from 'express'
import AuthRouter from './auth.js';
const app=express();
app.use(express.json());
app.listen(3000,()=>{
    console.log("server started");
});

app.use('/signup',AuthRouter);





