const client = require('../../utils/dbConnector').client;

module.exports = {
    getRedis: (req, res) => {
        client.get(req.params.key, function (error, result) {
            if (error) {
                console.log(error);
                throw error;
            }
            console.log('GET result ->' + result);
            res.send(result);
        });
    }
}
