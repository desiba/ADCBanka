import {expect} from 'chai';
import request from 'supertest';
import app from '../index';

describe('User', () => {


    const user = {
        user: {
            email: 'paul@aol.com',
            firstname: 'femi',
            lastname: 'paul',
            password: 'wisdom',
            type:'des@dd.com',
            isAdmin: false
        },

        user403: {
            email: "abs@aol.com",
            firstname: "femi",
            lastname: "jinadu",
            password: "wisdom",
            type: "savings",
            isAdmin: false
        }
    }


    describe('#POST /user', () => {
        it('this is to test user signup api', (done) => {
            request(app)
            .post('/api/v1/user/signup')
            .send(user.user)
            .end((err, res) => {
                expect(res.body).to.be.an('object');
                expect(res.body.code).to.equal(200);
                expect(res.body.status).to.equal('success');
                done();
            })
        })
    })


    describe('#POST /user', () => {
        it('this will not signup user with existed email', (done) => {
            request(app)
            .post('/api/v1/user/signup')
            .send(user.user403)
            .end((err, res) => {
                expect(res.body).to.be.an('object');
                expect(res.body.code).to.equal(403);
                expect(res.body.status).to.equal('failed');
                done();
            })
        })
    })
})