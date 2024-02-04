const http = require('http');
const url = require('url');
const utils = require('./modules/util');

module.exports = (request, response) => {
    const queryObject = url.parse(request.url, true).query;

    const name = queryObject.name || 'Guest';
    const text = queryObject.text || 'Fake';
    const currentTime = utils.getDate();

    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(`<p style="color: blue;">Hello ${name}, What a beautiful day. Server current date and time is ${currentTime}</p>`);
};
