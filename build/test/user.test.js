"use strict";

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _chai = _interopRequireWildcard(require("chai"));

var _index = _interopRequireDefault(require("../index"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai.default.use(_chaiHttp.default);

describe('Test User Controller', function () {
  var token = '',
      userId = 1,
      accountId;
  var user = {
    user: {
      email: 'paul@aol.com',
      firstname: 'femi',
      lastname: 'paul',
      password: 'wisdom',
      type: 'des@dd.com',
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
    }
  };
  describe('#POST /user', function () {
    it('this is to test user signup api', function (done) {
      _chai.default.request(_index.default).post('/api/v1/user/auth/signup').send(user.user).end(function (err, res) {
        (0, _chai.expect)(res.body).to.be.an('object');
        (0, _chai.expect)(res).to.have.status(200);
        (0, _chai.expect)(res.body.status).to.equal(200);
        (0, _chai.expect)(res.body.data).to.be.a('object');
        (0, _chai.expect)(res.body.data).to.have.property('id');
        (0, _chai.expect)(res.body.data).to.have.property('email');
        (0, _chai.expect)(res.body.data).to.have.property('firstname');
        (0, _chai.expect)(res.body.data).to.have.property('lastname');
        (0, _chai.expect)(res.body.data).to.have.property('password');
        (0, _chai.expect)(res.body.data).to.have.property('type');
        (0, _chai.expect)(res.body.data).to.have.property('isAdmin');
        (0, _chai.expect)(res.body.data.email).to.equal('paul@aol.com');
        done();
      });
    });
    it('this is to prevent signup if email is missing', function (done) {
      _chai.default.request(_index.default).post('/api/v1/user/auth/signup').send(user.user).end(function (err, res) {
        (0, _chai.expect)(res.body).to.be.an('object');
        (0, _chai.expect)(res.body.status).to.equal(404);
        done();
      });
    });
  });
  describe('#POST /user signin', function () {
    it('this is to test user signin api', function (done) {
      _chai.default.request(_index.default).post('/api/v1/user/auth/signin').send(user.login).end(function (err, res) {
        (0, _chai.expect)(res.body).to.be.an('object');
        (0, _chai.expect)(res.body.status).to.equal(200);
        (0, _chai.expect)(res.body.data).to.have.property('token');
        (0, _chai.expect)(res.body.data).to.have.property('id');
        (0, _chai.expect)(res.body.data).to.have.property('firstname');
        (0, _chai.expect)(res.body.data).to.have.property('lastname');
        (0, _chai.expect)(res.body.data).to.have.property('type');
        (0, _chai.expect)(res.body.data).to.have.property('isAdmin');
        token = "Bearer ".concat(res.body.data.token);
        done();
      });
    });
    it('this is to test user signin api', function (done) {
      _chai.default.request(_index.default).get('/api/v1/user/users').set('Authorization', token).end(function (err, res) {
        (0, _chai.expect)(res.body).to.be.an('object');
        (0, _chai.expect)(res.body.status).to.equal(200);
        done();
      });
    });
  });
  describe('#GET /user ', function () {
    it('admin can get user by id', function (done) {
      _chai.default.request(_index.default).get("/api/v1/user/users/".concat(userId)).set('Authorization', token).end(function (err, res) {
        (0, _chai.expect)(res.body).to.be.an('object');
        (0, _chai.expect)(res.body.status).to.equal(200);
        (0, _chai.expect)(res.body.data).to.be.a('object');
        (0, _chai.expect)(res.body.data).to.have.property('id');
        (0, _chai.expect)(res.body.data).to.have.property('email');
        (0, _chai.expect)(res.body.data).to.have.property('firstname');
        (0, _chai.expect)(res.body.data).to.have.property('lastname');
        (0, _chai.expect)(res.body.data).to.have.property('type');
        done();
      });
    });
  });
  describe('#POST /user/accounts ', function () {
    it('user can create an account', function (done) {
      _chai.default.request(_index.default).post('/api/v1/user/accounts').send(user.account).set('Authorization', token).end(function (err, res) {
        if (err) return done(err);
        (0, _chai.expect)(res.body).to.be.an('object');
        (0, _chai.expect)(res.body.status).to.equal(200);
        (0, _chai.expect)(res.body.data).to.be.a('object');
        (0, _chai.expect)(res.body.data).to.have.property('id'); //expect(res.body.data).to.have.property('accountNumber');
        //expect(res.body.data).to.have.property('createdOn');
        //expect(res.body.data).to.have.property('owner');
        //expect(res.body.data).to.have.property('type');
        //expect(res.body.data).to.have.property('status');
        //expect(res.body.data).to.have.property('balance');

        accountId = res.body.data.id;
        done();
      });
    });
  });
  describe('#POST /user/accounts/id ', function () {
    it('user get account by id', function (done) {
      _chai.default.request(_index.default).get("/api/v1/user/accounts/".concat(accountId)).set('Authorization', token).end(function (err, res) {
        if (err) return done(err);
        (0, _chai.expect)(res.body).to.be.an('object');
        (0, _chai.expect)(res.body.status).to.equal(200);
        (0, _chai.expect)(res.body.data).to.be.a('object');
        (0, _chai.expect)(res.body.data).to.have.property('id');
        (0, _chai.expect)(res.body.data).to.have.property('accountNumber');
        (0, _chai.expect)(res.body.data).to.have.property('createdOn');
        (0, _chai.expect)(res.body.data).to.have.property('owner');
        (0, _chai.expect)(res.body.data).to.have.property('type');
        (0, _chai.expect)(res.body.data).to.have.property('status');
        (0, _chai.expect)(res.body.data).to.have.property('balance');
        done();
      });
    });
  });
});