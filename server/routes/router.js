/** 
 * Main application router
*/
const express = require('express');
const config = require('../../app-config.json');

// Setup sports routes
const sportRouter = express.Router();
require('./sport/sportRouter')(sportRouter);

module.exports = app => {

    app.use(config.apiPath, sportRouter);

};