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
        if (!req.params.id) {
            return res.sendStatus(400);
        }

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
            throw error;
        }
    },

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
            throw error
        }
    }

}