const express = require('express')
const app = express()

//middleWare function used in post method to convert recieved Data to json 
app.use(express.json());

app.listen(3000,()=>{
    console.log("Listening at port 3000");
})

let userData=[];


//get
app.get('/users', function (req, res) {
    res.send(userData);
})

//post//
app.post('/users',(req,res)=>{
    console.log(req.body);
    userData.push(req.body);
    res.json({
        message:"Recieved",
        User:req.body,
    })
    // res.send('helo user');
})

// update//
app.patch('/users',(req,res)=>{
    let idx=req.body.idx;
    userData[idx]=req.body.data;
    res.json({
        message:"Updated",
        User:userData[idx]
    })
})

//delete

app.delete('/users',(req,res)=>{
    let idx=req.body.idx;
    userData[idx]={};
    res.json({
        message:"Deleted",
    })
})

