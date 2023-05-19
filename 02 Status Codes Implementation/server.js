const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    console.log("req reached to server");
    console.log(req.url);

    

    let path='./views';
    res.statusCode=200;
    if(req.url=='/'){
        path+='/index.html'
        
    }else if(req.url=='/about'){
        path+='/about.html'
    }
    else if(req.url=='/about-me'){
        res.statusCode=301;
        res.setHeader('Location','/about');
        res.end();
    }else if(req.url=='/contact'){
        path+='/contact.html'
    }else{
        path+='/not.html'
        res.statusCode=404;
    }
    fs.readFile(path,(err,Data)=>{
        if(err)console.log(err);
        else res.end(Data);
    })

})

server.listen(3000,()=>{
    console.log("Listening at port 3000");
})