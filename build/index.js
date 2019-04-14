"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("@babel/polyfill");

require("dotenv/config");

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _routes = _interopRequireDefault(require("./routes"));

var _path = _interopRequireDefault(require("path"));

var _morgan = _interopRequireDefault(require("morgan"));

var _expressValidator = _interopRequireDefault(require("express-validator"));

var _customValidator = _interopRequireDefault(require("./middlewares/validators/custom-validator"));

var _customSanitizer = _interopRequireDefault(require("./middlewares/validators/custom-sanitizer"));

var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));

var _swaggerJsdoc = _interopRequireDefault(require("swagger-jsdoc"));

var _module = require("module");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//const bootcamper = new Module("tablename");
var app = (0, _express.default)();
var PORT = process.env.PORT || 3000;
app.use((0, _morgan.default)('dev'));
app.use(_bodyParser.default.json());
app.use(_bodyParser.default.urlencoded({
  extended: true
}));
app.use((0, _expressValidator.default)({
  customValidators: _customValidator.default,
  customSanitizers: _customSanitizer.default
}));
app.use('/api-docs', _express.default.static(_path.default.join(__dirname, '../api/public/api-docs')));
app.use('/', _routes.default);
app.get('/', function (req, res) {
  res.send('The API IS WORKING');
});

var _default = app.listen(PORT, function () {
  console.log("server is running on PORT ".concat(PORT));
});

exports.default = _default;