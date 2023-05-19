const express = require('express')
const app = express()
app.listen(3000,()=>{
    console.log("Listening at port 3000");
})

//routes

app.get('/', function (req, res) {
  //atomate the header that text sent is html or simple text//
    // res.send('<h1>hello</h1>')
    res.sendFile('./views/index.html',{root:__dirname});
    // res.sendFile('C:\Users\kaush\Desktop\Backend Summer\03 shift to express to make server\views\index.html');
})

app.get('/about', function (req, res) {
    res.sendFile('./views/about.html',{root:__dirname});
})

//redirects//

app.get('/about-us', function (req, res) {
    res.redirect('/');
})

//404//middle ware is used//
//synchronous use h uska//
app.use((req,res)=>{
    res.status(404).sendFile('./views/notFound.html',{root:__dirname});
})


//post method -send data from frontEnd to Backend//

