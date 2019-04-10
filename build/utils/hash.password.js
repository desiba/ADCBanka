"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _bcrypt = _interopRequireDefault(require("bcrypt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

var password = '';

var hashPassword = function hashPassword(pwd) {
  var salt = _bcrypt.default.genSaltSync(20);

  password = (_readOnlyError("password"), _bcrypt.default.hashSync(pwd, salt));
  return password;
};

var _default = hashPassword;
exports.default = _default;