"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _api = _interopRequireDefault(require("./api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router();

router.get('/', function (req, res) {
  return res.send("You have reached index routes");
});
router.use('/api', _api.default);
router.all('*', function (reg, res) {
  var errorMessage = {
    message: 'Wrong route enter',
    endpoints: {
      signup: 'POST /api/v1/auth/signup',
      login: 'POST /api/v1/auth/login'
    },
    success: false
  };
  res.status(404).json(errorMessage);
});
var _default = router;
exports.default = _default;