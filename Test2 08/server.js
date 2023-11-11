const express=require('express');
const {AuthRouter}=require('./auth')
const app=express();

// app.use(express.json());
app.use('/signup',AuthRouter);

app.listen(3000,()=>{
    console.log("server started");
});









