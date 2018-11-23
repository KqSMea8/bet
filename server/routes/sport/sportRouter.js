const {
    getAllSports,
    listAllEventsForGivenSport,
    listAllDataForGivenEvent,
    listAllSportsAllLanguages
} = require('../../handlers/sportHandler');

const { checkLanguage } = require('../../handlers/checkLanguage');

module.exports = router => {

    router.get('/sports', checkLanguage, getAllSports);
    router.get('/events/sport/:givenSport', checkLanguage, listAllEventsForGivenSport);
    router.get('/events/event/:id', checkLanguage, listAllDataForGivenEvent);
    router.get('/sports/all', listAllSportsAllLanguages);

};
