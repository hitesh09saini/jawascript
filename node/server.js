const http = require('http');
const fs = require('fs');

const PORT = 2000;
const hostName = 'Localhost';
const about = fs.readFileSync('./index.html','utf-8')

const server =  http.createServer((request,response)=>{
    if(request.url === "/about"){
       return  response.end(about)
    }else
    if(request.url === "/"){
       return  response.end('<H1>Home Page</H1>')
    }else
    if(request.url === "/Electra"){
        return  response.end('<H1>Hello Electra</H1>')
     }
    else{
     return response.end('page not found')
   }

   
})

server.listen(PORT,hostName,()=>{
    console.log(`server is working on http://${hostName}:${PORT}`);
})