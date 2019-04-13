"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _transformer = _interopRequireDefault(require("../../utils/transformer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Validator = {};

Validator.signup = function (req, res, next) {
  req.checkBody('email', 'please supply a vali email').notEmpty().isEmailV2();
  req.checkBody('firstname', 'Please enter a valid firstName').notEmpty().isHumanName();
  req.checkBody('lastname', 'Please supply a valid lastName').notEmpty().isHumanName();
  req.checkBody('password', 'Please supply a valid password').isMinLen(6).isMaxLen(50); //req.checkBody('address', 'Please supply a valid lastName').notEmpty();//.isMinLen(6).isMaxLen(50);
  //req.checkBody('phonenumber', 'Please supply valid phoneNumber').notEmpty();//.isMinLen(10).isMaxLen(15);
  //req.checkBody('roleId', 'Please supply a valid username').notEmpty();

  req.asyncValidationErrors().then(next).catch(function (errors) {
    return res.status(400).json(_transformer.default.transformResponse(400, _transformer.default.transformExpressValidationErrors(errors), errors));
  });
};

Validator.login = function (req, res, next) {
  req.checkBody('email', 'please supply a valid email').notEmpty().isEmailV2();
  req.checkBody('password', 'Please supply a valid password').isMinLen(3).isMaxLen(50);
  req.asyncValidationErrors().then(next).catch(function (errors) {
    return res.status(400).json(_transformer.default.transformResponse(400, _transformer.default.transformExpressValidationErrors(errors), errors));
  });
};

var _default = Validator;
exports.default = _default;