"use strict";

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _chai = _interopRequireWildcard(require("chai"));

var _index = _interopRequireDefault(require("../index"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai.default.use(_chaiHttp.default);

describe('Test User Controller', function () {
  var user = {
    user: {
      email: 'paul@aol.com',
      firstname: 'femi',
      lastname: 'paul',
      password: 'wisdom',
      type: 'des@dd.com',
      isAdmin: false
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
});