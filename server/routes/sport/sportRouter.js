const {
    getAllSports,
    listAllEventsForGivenSport,
    listAllDataForGivenEvent,
    listAllSportsAllLanguages
} = require('../../handlers/sportHandler');

const { checkLanguage } = require('../../handlers/checkLanguage');

/**
 * Generics endpoints, we can take multiple information for a specific account
 *  
 */
module.exports = router => {

    router.get('/sports', checkLanguage, getAllSports);
    router.get('/events/sport/:givenSport', checkLanguage, listAllEventsForGivenSport);
    router.get('/data/sport/:givenEvent', checkLanguage, listAllDataForGivenEvent);
    router.get('/sports/all', checkLanguage, listAllSportsAllLanguages);

};
