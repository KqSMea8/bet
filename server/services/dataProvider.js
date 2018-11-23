const client = require('../../utils/dbConnector').client;
const { callExternalApi } = require('./apiCaller');
const redis = require('redis');
const bluebird = require('bluebird');
bluebird.promisifyAll(redis.RedisClient.prototype);


/**
 * @description Function used to save informations retrieved from external API in Redis DB
 * @param {String} lang - Parameter used to create redis key
 * @param {String} result - Data to save in Redis DB
 */
function saveData(lang, result) {
    client.set(lang, JSON.stringify(result), redis.print);
}

module.exports = {

    /**
     * @description Function used to get informations from external API or from Redis DB if informations already exist in DB
     * @param {String} lang - Parameter used to search data for specific language
     */
    getData: async (lang) => {

        try {

            let result = await client.getAsync(lang);

            if (!result) {
                try {
                    result = await callExternalApi(lang);
                    saveData(lang, result);
                    return result;
                } catch (error) {
                    throw error;
                }
            }

            return JSON.parse(result);

        } catch (error) {
            throw error;
        }

    }

}