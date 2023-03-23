const http = require('http');
const fs = require('fs');

fs.writeFile("index.html", "<h1> Hello World </h1> <br/> <p> This is Pradipta Mandal... </p>", (err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("success")
    }
})

let server = http.createServer((req,res)=>{
    fs.readFile("index.html", (err,data)=>{
        res.write(data);
        res.end();
    })
})

server.listen(5000, ()=>{
    console.log("listening to the server in 5000")
})