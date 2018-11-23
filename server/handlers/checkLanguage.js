module.exports = {

     /**
     * @description Middleware created to check for valid languages
     * @param {Object} req - Request object
     * @param {Object} res - Response object
     * @param {Object} next - Next object
     */
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