"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CreateToken = {
  token: function token(user, secretKey) {
    var authToken = _jsonwebtoken.default.sign(user, secretKey, {
      expiresIn: '24h'
    });

    return authToken;
  }
};
var _default = CreateToken;
exports.default = _default;