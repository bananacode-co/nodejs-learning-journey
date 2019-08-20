
/*This is a basic setup server your can run it using node server.js */
const HTTP = require('http');
const HOST = '127.0.0.1';
const PORT = 666;
const server  = HTTP.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    res.end('Hola Alexis')
})
server.listen(PORT,HOST,(()=>{
    console.log(`Server running on port ${PORT}`)
}))
