const client = require('../../utils/dbConnector').client;

module.exports = {
    saveRedis: (req, res) => {
        client.set(req.body.name, req.body.value, redis.print);
        res.sendStatus(200);
    }
}