const http = require('http');
const fs = require('fs');
const VisitorCounter = require('./VisitorCounter.js');

let counter = new VisitorCounter;
let html = fs.readFileSync('index.html').toString();

const server = http.createServer((req, res) => {
  let url = req.url;
  console.log(url);
  if (url === '/favicon.ico') {
    res.end('');
    return;
  }
  counter.addOne();
  res.end(html.replace('##NUMBER', counter.getCount()));
});

server.listen(4000, '127.0.0.1', () => {
  console.log(`Stared listening!`);
});