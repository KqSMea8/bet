const { getData } = require('../services/dataProvider');

module.exports = {

    /**
     * @description Function used to return all sports for specific language
     * @param {Object} req - Request object
     * @param {Object} res - Response object
     */
    getAllSports: async (req, res) => {
        try {
            let response = await getData(req.lang);
            delete response.version;

            response = response.sports.map(item => {
                delete item.events;
                return item;
            });

            res.send(response);
        } catch (error) {
            res.sendStatus(500);
        }
    },

    /**
     * @description Function used to return all events for given sport
     * @param {Object} req - Request object
     * @param {Object} res - Response object
     */
    listAllEventsForGivenSport: async (req, res) => {

        try {
            let response = await getData(req.lang);
            delete response.version;

            response = response.sports.filter(item => {
                return item.title.toLowerCase() === req.params.givenSport.toLowerCase()
            });

            if (response.length > 0) {
                response = response[0].events.map(event => {
                    delete event.outcomes
                    return event;
                });
                return res.send(response);
            }
            res.send([]);
        } catch (error) {
            res.sendStatus(500);
        }
    },

    /**
     * @description Function used to return all data for given event by Id
     * @param {Object} req - Request object
     * @param {Object} res - Response object
     */
    listAllDataForGivenEvent: async (req, res) => {

        try {
            let response = await getData(req.lang);
            delete response.version;

            response = response.sports.map(item => {
                let filteredItem = item.events.filter(event => {
                    return event.id == req.params.id;
                });

                if (filteredItem.length > 0) {
                    return filteredItem
                }
            });

            res.send(response[0]);
        } catch (error) {
            res.sendStatus(500);
        }
    },

    /**
     * @description Function used to return all sports in all languages
     * @param {Object} req - Request object
     * @param {Object} res - Response object
     */
    listAllSportsAllLanguages: async (req, res) => {
        try {

            let languages = ['en-gb', 'de-de', 'zh-cn'];

            response = languages.map(async lang => {
                let response = await getData(lang);
                delete response.version;

                specificLangRes = response.sports.map(item => {
                    delete item.events;
                    return item;
                });

                return { [lang]: specificLangRes };

            });

            response = await Promise.all(response);
            res.send(response);

        } catch (error) {
            res.sendStatus(500);
        }
    }

}