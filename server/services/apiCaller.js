const rp = require('request-promise');

module.exports = {

     /**
     * @description Function used to call external API
     * @param {String} lang - Language to be searched for
     */
    callExternalApi: (lang) => {

        let options = {
            method: 'GET',
            uri: `http://www.betvictor.com/${lang}/live/live/list.json`,
            json: true, // Automatically parses the JSON string in the response
        };
        return rp(options);
    }

}