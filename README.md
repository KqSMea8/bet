# bet
Interview app

## Quick start guide

#### **Install all dependencies** 
```
npm install
```
#### **Start application**
```
npm run dev 
```

#### **Unit/Integration tests**
```
npm test 
```

## Configuration

* I installed local redis service and i'm connecting at this service on default port [6379]

## Dependencies

* [express](https://www.npmjs.com/package/express)  - Fast, unopinionated, minimalist web framework for node;
* [body-parser](https://www.npmjs.com/package/body-parser) - Node.js body parsing middleware;
* [request-promise](https://www.npmjs.com/package/request-promise) - the simplified HTTP request client 'request' with Promise support.
* [bluebird](https://www.npmjs.com/package/bluebird) - Bluebird is a fully featured promise library with focus on innovative features and performance

## Dev dependencies

* [nyc](https://www.npmjs.com/package/nyc) - Nice output and measurement of test coverage
* [supertest](https://www.npmjs.com/package/supertest) - High-level abstraction for testing HTTP
* [nock](https://www.npmjs.com/package/nock) - Mock every outgoing request
* [mocha](https://www.npmjs.com/package/mocha) - Mocha is a simple, flexible, fun JavaScript test framework for node.js and the browse;
* [chai](https://www.npmjs.com/package/chai) - Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.
* [chai-as-promised](https://www.npmjs.com/package/chai-as-promised) - Extends Chai with a fluent language for asserting facts about promises

## Swagger API specifications
* Check [Swagger spec](./swagger/swagger_obie.yaml) for more details.