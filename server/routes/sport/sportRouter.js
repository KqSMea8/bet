const {
    getAllSports,
    listAllEventsForGivenSport,
    listAllDataForGivenEvent,
    listAllSportsAllLanguages
} = require('../../handlers/sportHandler');

/**
 * Generics endpoints, we can take multiple information for a specific account
 *  
 */
module.exports = router => {
    
    router.get('/sports', getAllSports);
    router.get('/events/sport/:givenSport', listAllEventsForGivenSport);
    router.get('/data/sport/:givenEvent', listAllDataForGivenEvent);
    router.get('/sports/all', listAllSportsAllLanguages);

};
