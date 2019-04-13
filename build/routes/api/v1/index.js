"use strict";

var _express = _interopRequireDefault(require("express"));

var _user = _interopRequireDefault(require("./user.route"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router();

router.use('/user', _user.default);
router.get('/', function (req, res) {
  return res.send('This is the api/v1 routes');
});
module.exports = router;