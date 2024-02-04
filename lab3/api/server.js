const utils = require('./modules/util.js');
const http = require('http');
const url = require('url');
const message = require("./lang/en/en.js")


http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  let name = req.url.split("=")[1];
  res.write(`<p style="color: blue;">${message.greeting.replace("%1",name)} ${date.getDate().toString()}</p>`);
  res.end();
}).listen(8080);
