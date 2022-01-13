// const http = require('http');
const colors = require('colors');


// const handleServer = function(req,res){
//     res.writeHead(200, { 'Content-type': 'text/html'});
//     res.write('<h1>Hola mundo</h1>');
//     res.end();
// }

// const server = http.createServer(handleServer);

// server.listen(3000, function(){
//     console.log('Server on port 3000'.rainbow);
// });

console.log('Anda lindo');

const express = require('express');
const res = require('express/lib/response');
const server = express();

server.get('/', (req,res) =>{
    res.send('<h1>Hola mundo con express y node</h1>');
})

server.listen(3000, () => {
    console.log('Server on port 3000'.rainbow);
})