//module used to create server is http module
const http=require('http');
const fs=require('fs');
//req and res are objects and proper header must be passed to req 
const server=http.createServer((req,res)=>{
    console.log("req mde from browser to server");
    console.log(req.method);
    console.log(req.url);
    // console.log(req.headers);
    // console.log(req.body);




    // res.setHeader('Content-Type','text/plain');
    // res.write("req sent from server");

    // res.setHeader('Content-Type','text/html');
    // res.write("<h1>req sent from server</h1>");
    // res.write("<h3>How you doin!?</h3>");
    // res.end();

    let path='./views';
    if(req.url=='/'){
        path+='/index.html'
    }else if(req.url=='/about'){
        path+='/about.html'
    }else{
        path+='/not.html'
    }



    //now when required to  sent whole file//
    fs.readFile(path,(err,Data)=>{
        if(err){
            console.log(err);
        }else{
            
            // res.write(Data);
            // res.end();

            //above can also be written as//
            
            res.end(Data);
        }
    })

});

//port, host, callback
server.listen(3000,'localhost',()=>{
    console.log("server listening at port 3000");
});

