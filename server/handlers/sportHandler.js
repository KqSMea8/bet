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

    },

    listAllDataForGivenEvent: async (req, res) => {

    },

    listAllSportsAllLanguages: async (req, res) => {

    }

}