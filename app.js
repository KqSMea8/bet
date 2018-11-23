const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('port', process.env.PORT || 3000);
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Set routes
require('./server/routes/router')(app);

module.exports = app;