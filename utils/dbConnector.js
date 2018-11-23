var redis = require('redis');
var client = redis.createClient();

// Connect to database
module.exports = {
    client
}