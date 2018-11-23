const rp = require('request-promise');

module.exports = {

    callExternalApi: (language = 'en') => {

        let options = {
            method: 'GET',
            uri: `http://www.betvictor.com/live/${language}/live/list.json`,
            json: true, // Automatically parses the JSON string in the response
        };
        return rp(options);
    }

}