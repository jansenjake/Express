const express = require('express');

//port
const port = parseInt(process.env.port) || 4000;

//express app
const app = express();

//router
const route = app.Router();

app.use(
    route
)

//home or /
route.get('/', (req, res) => {
    res.status(200).send('mission accomplished!');
})























// let http = require('http');
// //port
// const port = parseInt(process.env.PORT) || 4000;

// //web server
// http.createServer( (req, res)=>{
//     const currUrl = req.url;
//     console.log('Url: ', currUrl, '\nMethod: ', req.method);
//     res.writeHead(200, {'Content-type': 'text/html'});
//     switch(currUrl) {
//         case '/':
//             res.end('You are home');
//         break
//         case '/about':
//             res.end('About me page');
//         break
//         case '/data':
//             res.end('Page data');
//         break
//         default:
//             res.end('Page / content was not found');
//     }
// }).listen(port, ()=>{
//     console.log(`server is running on port ${port}`);
// });


// console.log('Keep low soldier!');

// let {addition} = require('./Addition');
// addition(3, 7);
// addition(7, 7);





// http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/plain'});
//     res.end('Look alive!');
// });
