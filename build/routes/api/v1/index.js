"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _user = _interopRequireDefault(require("./user.route"));

var _swaggerJsdoc = _interopRequireDefault(require("swagger-jsdoc"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router(); // Swagger jsdoc configuration


var swaggerDefinition = {
  info: {
    title: 'Node Swagger API',
    version: '1.0.0',
    description: 'Api documentation for ADC Andela.'
  },
  host: 'localhost:3000',
  basePath: '/api/v1'
}; // options for the swagger docs

var options = {
  // import swaggerDefinitions
  swaggerDefinition: swaggerDefinition,
  // path to the API docs
  apis: ['./api/swagger/*.js']
}; // initialize swagger-jsdoc

var swaggerSpec = (0, _swaggerJsdoc.default)(options); // setup swagger route

router.get('/swagger.json', function (req, res) {
  res.header('Content-Type', 'application/json');
  res.send(swaggerSpec);
});
router.use('/user', _user.default);
router.get('/', function (req, res) {
  return res.send('This is the api/v1 routes');
});
var _default = router;
exports.default = _default;