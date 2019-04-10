"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var JWT = {};

JWT.verifyToken = function (req, res, next) {
  var token = req.body.token || req.query.token || req.headers.Authorization || req.headers.authorization;
  token = token ? req.headers.authorization.split(" ")[1] : token;

  if (!token) {
    return res.status(403).json('Please log in');
  }

  _jsonwebtoken.default.verify(token, process.env.JWT_SECRET, function (error, decoded) {
    console.log(error);

    if (error) {
      return res.status(401).json(error.message);
    }

    req.decodedToken = decoded;
    next();
  });
};

var _default = JWT;
exports.default = _default;