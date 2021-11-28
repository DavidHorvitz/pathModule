const httpServer = require('http').Server;
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');


class WebServer extends httpServer {
    constructor() {
        super();
        // this.listen(3000);
        const port = process.env.port;//150 page
        this.listen(port);
        this.on('request', this.requestHandler);
    }
    requestHandler(request, response) {
        // const src = fs.createReadStream('./../static/index.html'); // ERROR!!!
        const src = fs.createReadStream(path.join(__dirname, '../static/index.html'));
        src.pipe(response);
    }
}
exports.module = new WebServer();

dotenv.condig();
console.log(process.env.port);
