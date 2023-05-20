const express = require("express");
const app = express();
app.use(express.json());
app.listen(3000);
// app.listen(3000, () => {
//   console.log("Listening at port 3000");
// });

let userData = [{ Name:"Kaushal",}, {Name:"BatMan"},{Name:"SuperMan"}];

//MINI APP ->user
const userRouter=express.Router();
//base route , router to use
app.use('/user', userRouter);//middleWare//

//functions over './user'
function getUser(req,res){
    console.log(req.body);
    res.send(userData);
}

function postUser(req,res){
    console.log(req.body);
    userData.push(req.body);
    res.json({
      message: "Recieved",
      User: req.body,
    });
    // res.send('helo user');
  }

  function patchUser(req,res){
    let idx = req.body.idx;
    userData[idx] = req.body.data;
    res.json({
      message: "Updated",
      User: userData[idx],
    });
  }
  
  function deleteUser(req,res){
    let idx = req.body.idx;
    userData[idx] = {};
    res.json({
      message: "Deleted",
    });
  }

  //params function
  function getUserByParams(req,res){
    console.log(req.params.username);
    console.log(req.params);
    res.send("userName is recieved" )
  }


userRouter
.route("/")
.get(getUser)
.post(postUser)
.patch(patchUser)
.delete(deleteUser)

userRouter.route("/:username").get(getUserByParams);



