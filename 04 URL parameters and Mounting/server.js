const express = require("express");
const app = express();

//middleWare function used in post method to convert recieved Data to json
app.use(express.json());

app.listen(3000, () => {
  console.log("Listening at port 3000");
});

let userData = [{
    Name:"Kaushal",
}, {Name:"BatMan"},{Name:"SuperMan"}];

app.get("/users", function (req, res) {
    console.log(req.query);
    res.send(userData[req.query.id]);
});

app.post("/users", (req, res) => {
  console.log(req.body);
  userData.push(req.body);
  res.json({
    message: "Recieved",
    User: req.body,
  });
  // res.send('helo user');
});

app.patch("/users", (req, res) => {
  let idx = req.body.idx;
  userData[idx] = req.body.data;
  res.json({
    message: "Updated",
    User: userData[idx],
  });
});

app.delete("/users", (req, res) => {
  let idx = req.body.idx;
  userData[idx] = {};
  res.json({
    message: "Deleted",
  });
});

app.get("/users/:username", function (req, res) {
    console.log(req.params.username);
    console.log(req.params);
    res.send("userName is recieved" )
  });
