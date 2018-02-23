'use strict';
const express = require('express');

class BaseService {
    constructor(port=8000) {
        this.app = express();
        this.port = port;
    }

    registerEndpoint(path, func) {
        this.app.get(path, func);
    }

    start() {
        this.app.listen(3000, () => console.log(`App listening on port ${this.port}`));
    }
}

module.exports = BaseService;