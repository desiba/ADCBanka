import chaiHttp from 'chai-http';
import chai, { expect } from 'chai';
import app from '../index';

chai.use(chaiHttp);

describe('Test User Controller', () => {

    let token = '', userId = 1, accountId ;

    const user = {
        user: {
            email: 'paul@aol.com',
            firstname: 'femi',
            lastname: 'paul',
            password: 'wisdom',
            type:'des@dd.com',
            isAdmin: false
        },

        login: {
            email: 'des@aol.com',
            password: 'wisdom'
        },

        account: {
            accountNumber: 34623475,
            createdOn: '21/04/2018',
            owner: 1,
            type: 'savings',
            status: 'draft',
            balance: 34.50
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


    describe('#POST /user signin', () => {

        
        it('this is to test user signin api', (done) => {
            chai.request(app)
            .post('/api/v1/user/auth/signin')
            .send(user.login)
            .end((err, res) => {
                expect(res.body).to.be.an('object');
                expect(res.body.status).to.equal(200);
                expect(res.body.data).to.have.property('token');
                expect(res.body.data).to.have.property('id');
                expect(res.body.data).to.have.property('firstname');
                expect(res.body.data).to.have.property('lastname');
                expect(res.body.data).to.have.property('type');
                expect(res.body.data).to.have.property('isAdmin');
                token = `Bearer ${res.body.data.token}`;

                done();
            });
        },);

        it('this is to test user signin api', (done) => {
            chai.request(app)
            .get('/api/v1/user/users')
            .set('Authorization', token)
            .end((err, res) => {
                expect(res.body).to.be.an('object');
                expect(res.body.status).to.equal(200);
                done();
            });
        },);

    })


    describe('#GET /user ', () => {

        it('admin can get user by id', (done) => {
            chai.request(app)
            .get(`/api/v1/user/users/${userId}`)
            .set('Authorization', token)
            .end((err, res) => {
                expect(res.body).to.be.an('object');
                expect(res.body.status).to.equal(200);
                expect(res.body.data).to.be.a('object');
                expect(res.body.data).to.have.property('id');
                expect(res.body.data).to.have.property('email');
                expect(res.body.data).to.have.property('firstname');
                expect(res.body.data).to.have.property('lastname');
                expect(res.body.data).to.have.property('type');
                done();
            });
        },);

    })



    describe('#POST /user/accounts ', () => {

        it('user can create an account', (done) => {
            chai.request(app)
            .post('/api/v1/user/accounts')
            .send(user.account)
            .set('Authorization', token)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).to.be.an('object');
                expect(res.body.status).to.equal(200);
                expect(res.body.data).to.be.a('object');
                expect(res.body.data).to.have.property('id');
                //expect(res.body.data).to.have.property('accountNumber');
                //expect(res.body.data).to.have.property('createdOn');
                //expect(res.body.data).to.have.property('owner');
                //expect(res.body.data).to.have.property('type');
                //expect(res.body.data).to.have.property('status');
                //expect(res.body.data).to.have.property('balance');
                accountId = res.body.data.id;
                done();
            });
        },);


        

    })



    describe('#POST /user/accounts/id ', () => {

        it('user get account by id', (done) => {
            chai.request(app)
            .get(`/api/v1/user/accounts/${accountId}`)
            .set('Authorization', token)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).to.be.an('object');
                expect(res.body.status).to.equal(200);
                expect(res.body.data).to.be.a('object');
                expect(res.body.data).to.have.property('id');
                expect(res.body.data).to.have.property('accountNumber');
                expect(res.body.data).to.have.property('createdOn');
                expect(res.body.data).to.have.property('owner');
                expect(res.body.data).to.have.property('type');
                expect(res.body.data).to.have.property('status');
                expect(res.body.data).to.have.property('balance');
                done();
            });
        },);

        

    })


   


    
})