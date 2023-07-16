//const { fstat } = require('fs');
const fs = require('fs') 
const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    console.log(req.url)

    if(req.url == '/'){
        res.statusCode = 200;
        const data = fs.readFileSync('index.html') 
        //res.end('<h1> About NodeJS</h1> <p> Hey Hello World , I am learning NODE JS </p>');
        res.end(data.toString());
    }
    else if (req.url == '/node'){
        res.statusCode = 200;
        res.end('<h1> NodeJS Code</h1> <p> Hey Hello World , I am NodeJS </p>');
    }
    else if(req.url == '/about'){
        res.statusCode = 200;
        res.end('<h1> About NodeJS</h1> <p> Hey Hello World , I am learning NODE JS </p>');
    }
    else{
        res.statusCode = 404;
        res.end('<h1> Page Not Found <h1/> <p> Hey this page was not found on the server </p>');
    }




    
})

server.listen(port, ()=>{
    console.log('Server is listening on port ${port}');

});