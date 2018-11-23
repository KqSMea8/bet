const { getRedis } = require('./getFromRedis');

module.exports = {
    checkLanguage: async (req, res, next) => {
        let languages = ['en-gb', 'de-de', 'zh-cn'];
        let selectedLang = languages.filter(item => item === req.query.lang);

        if (selectedLang && selectedLang.length > 0) {
            req.lang = selectedLang[0];
        }

        if (req.lang) {
            next();
        } else {
            return res.sendStatus(400);
        }

    }
}