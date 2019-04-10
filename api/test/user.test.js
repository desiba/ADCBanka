import chaiHttp from 'chai-http';
import chai, { expect } from 'chai';
import app from '../index';

chai.use(chaiHttp);

describe('Test User Controller', () => {


    const user = {
        user: {
            email: 'paul@aol.com',
            firstname: 'femi',
            lastname: 'paul',
            password: 'wisdom',
            type:'des@dd.com',
            isAdmin: false
        },

    }


    describe('#POST /user', () => {
        it('this is to test user signup api', (done) => {
            chai.request(app)
            .post('/api/v1/user/auth/signup')
            .send(user.user)
            .end((err, res) => {
                expect(res.body).to.be.an('object');
                expect(res).to.have.status(200);
                expect(res.body.status).to.equal(200);
                expect(res.body.data).to.be.a('object');
                expect(res.body.data).to.have.property('id');
                expect(res.body.data).to.have.property('email');
                expect(res.body.data).to.have.property('firstname');
                expect(res.body.data).to.have.property('lastname');
                expect(res.body.data).to.have.property('password');
                expect(res.body.data).to.have.property('type');
                expect(res.body.data).to.have.property('isAdmin');
                expect(res.body.data.email).to.equal('paul@aol.com');
                done();
            });
        },);

        it('this is to prevent signup if email is missing', (done) => {
            chai.request(app)
            .post('/api/v1/user/auth/signup')
            .send(user.user)
            .end((err, res) => {
                expect(res.body).to.be.an('object');
                expect(res.body.status).to.equal(404);
                done();
            });
        },);

        

    })


    
})