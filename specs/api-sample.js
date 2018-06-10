const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
chai.use(chaiHttp);

require('../app');

describe('Sample API suit', () => {
    it('should be ok', done => {
        const expectBody = {
            id: 1,
            value: 'tempValue'
        };

        const url = 'http://localhost:10000';
        chai.request(url)
            .get('/api/sample/v1/5')
            .end(((err, res) => {

                expect(err).to.be.null;
                expect(res).to.have.status(200);
                assert.equal(res.body.id, expectBody.id);
                done();
            }));
    })
})