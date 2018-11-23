const { getData } = require('../services/dataProvider');

module.exports = {

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
            throw error
        }
    },

    listAllEventsForGivenSport: async (req, res) => {
        if (!req.params.givenSport) {
            return res.sendStatus(400);
        }

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
            res.send();
        } catch (error) {
            throw error;
        }
    },

    listAllDataForGivenEvent: async (req, res) => {

    },

    listAllSportsAllLanguages: async (req, res) => {

    }

}