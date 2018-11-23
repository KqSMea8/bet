const { getRedis } = require('./getFromRedis');

module.exports = {
    checkLanguage: async (req, res, next) => {
        req.lang = req.query.lang ? req.query.lang : 'en';
        next();
    }
}