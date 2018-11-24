const app = require('../app');
const chai = require('chai');
const client = require('../utils/dbConnector').client;
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
const nockData = require('../test/data-for-nock.json');
chai.use(chaiAsPromised);

const nock = require('nock');
const superTest = require('supertest');

describe('Unit Test', function () {

    it('Test check language middleware expect 400', async () => {

        nock('http://www.betvictor.com')
            .get('/en-gb/live/live/list')
            .reply(200, nockData);

        await superTest(app)
            .get('/api/sports')
            .expect(400);
    });

});

describe('Test every endpoint using nock', () => {

    afterEach(async () => {
        nock.cleanAll();

        client.flushdb(function (err, succeeded) {
            console.log(succeeded); // will be true if successfull
        });
    });

    it('Get all sports expect 200', async () => {

        nock('http://www.betvictor.com')
            .get('/en-gb/live/live/list')
            .reply(200, nockData);

        await superTest(app)
            .get('/api/sports')
            .query({ lang: 'en-gb' })
            .expect(200);
    });

    it('Get all sports expect 500', async () => {

        nock('http://www.betvictor.com')
            .get('/en-gb/live/live/list')
            .reply(500);

        await superTest(app)
            .get('/api/sports')
            .query({ lang: 'en-gb' })
            .expect(500);

    });

    it('Get all Events for given sport expect 200', async () => {

        nock('http://www.betvictor.com')
            .get('/en-gb/live/live/list')
            .reply(200, nockData);

        await superTest(app)
            .get('/api/events/sport/Football')
            .query({ lang: 'en-gb' })
            .expect(200);
    });

    it('Get all Events for given sport expect 200 with empty response', async () => {

        nock('http://www.betvictor.com')
            .get('/en-gb/live/live/list')
            .reply(200, nockData);

        await superTest(app)
            .get('/api/events/sport/test')
            .query({ lang: 'en-gb' })
            .expect(200);
    });

    it('Get all Events for given sport expect 500', async () => {

        nock('http://www.betvictor.com')
            .get('/en-gb/live/live/list')
            .reply(500);

        await superTest(app)
            .get('/api/events/sport/Football')
            .query({ lang: 'en-gb' })
            .expect(500);
    });

    it('Get all data for specific event expect 200', async () => {

        nock('http://www.betvictor.com')
            .get('/en-gb/live/live/list')
            .reply(200, nockData);

        await superTest(app)
            .get('/api/events/event/1006485300')
            .query({ lang: 'en-gb' })
            .expect(200);
    });

    it('Get all data for specific event expect 500', async () => {

        nock('http://www.betvictor.com')
            .get('/en-gb/live/live/list')
            .reply(500);

        await superTest(app)
            .get('/api/events/event/1006485300')
            .query({ lang: 'en-gb' })
            .expect(500);
    });

    it('Get all data for specific event expect 200 - test for filteredItem', async () => {

        nock('http://www.betvictor.com')
            .get('/en-gb/live/live/list')
            .reply(200, nockData);

        await superTest(app)
            .get('/api/events/event/1009291800')
            .query({ lang: 'en-gb' })
            .expect(200);
    });

    it('Get all sports in all languages expect 200', async () => {

        nock('http://www.betvictor.com')
            .get('/en-gb/live/live/list')
            .reply(200, nockData);

        nock('http://www.betvictor.com')
            .get('/de-de/live/live/list')
            .reply(200, nockData);

        nock('http://www.betvictor.com')
            .get('/zh-cn/live/live/list')
            .reply(200, nockData);

        await superTest(app)
            .get('/api/sports/all')
            .expect(200);
    });

    it('Get all sports in all languages expect 500', async () => {

        nock('http://www.betvictor.com')
            .get('/en-gb/live/live/list')
            .reply(500);

        nock('http://www.betvictor.com')
            .get('/de-de/live/live/list')
            .reply(500);

        nock('http://www.betvictor.com')
            .get('/zh-cn/live/live/list')
            .reply(500);

        await superTest(app)
            .get('/api/sports/all')
            .expect(500);
    });

});


describe('Test redis response', () => {

    beforeEach(async () => {
        client.set('en-gb', JSON.stringify(nockData));
    });

    it('Get all sports expect 200', async () => {
        await superTest(app)
            .get('/api/sports')
            .query({ lang: 'en-gb' })
            .expect(200);
    });

}); 