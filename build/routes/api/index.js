"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _v = _interopRequireDefault(require("./v1"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router();

router.get('/', function (req, res) {
  return res.send('api routes');
});
router.use('/v1', _v.default);
var _default = router;
exports.default = _default;