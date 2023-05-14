const http = require('http');
const fs = require('fs');

const host = '127.0.0.1';
// 127.0.0.1
const port = '3000';
let html = '';
fs.readFile('index.html', (err, buff) => {
  html = buff.toString();
});

const server = http.createServer((req, res) => {
  console.log(req.url);
  let urlParts = req.url.split('?');
  let query = urlParts[1];
  let path = urlParts[0];
  let params = {};
  if (query && query.length) {
    let rawParams = query.split('&');
    rawParams.forEach((param, i) => {
      let parts = param.split('=');
      params[parts[0]] = parts[1];
    })
    // for (let i = 0; i < rawParams.length; i++) {
    //   let parts = rawParams[i].split('=');
    //   params[parts[0]] = parts[1];
    // }
  }

  console.log(params, path, req.url);
  if (path === '/') {
    res.end(html.replace('NUMBER', ));
  } else if (path === '/hello') {
    res.end(`Welcome ${params.ime} to the hello page!`);
  } else {
    res.end('Hello world!')
  }
});

server.listen(port, host, () => {
  console.log(`Server listening on ${host}:${port}`);
})


