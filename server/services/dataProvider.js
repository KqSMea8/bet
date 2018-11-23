const client = require('../../utils/dbConnector').client;
const { callExternalApi } = require('./apiCaller');
const redis = require('redis');
const bluebird = require('bluebird');
bluebird.promisifyAll(redis.RedisClient.prototype);
module.exports = {

    getData: async (lang) => {

        let result = await client.getAsync(lang);

        if (!result) {
            try {
                result = await callExternalApi(lang);
                module.exports.saveData(lang, result);
                return result;
            } catch (error) {
                throw error;
            }
        }

        return JSON.parse(result);
    },

    saveData: (lang, result) => {
        client.set(lang, JSON.stringify(result), redis.print);
    }

}