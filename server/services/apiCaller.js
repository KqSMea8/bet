const rp = require('request-promise');

module.exports = {

    callExternalApi: (lang = 'en') => {

        let options = {
            method: 'GET',
            uri: `http://www.betvictor.com/${lang}/live/live/list.json`,
            json: true, // Automatically parses the JSON string in the response
        };
        return rp(options);
    }

}