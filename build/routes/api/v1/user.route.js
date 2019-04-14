"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _user = _interopRequireDefault(require("../../../controllers/user.controller"));

var _user2 = _interopRequireDefault(require("../../../middlewares/validators/user"));

var _auth = _interopRequireDefault(require("../../../middlewares/auth"));

var _user3 = _interopRequireDefault(require("../../../middlewares/permissions/user.permission"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router();

router.post('/auth/signup', _user2.default.signup, _user.default.userSignUp);
router.post('/auth/signin', _user.default.userSignIn);
router.get('/users/', _auth.default.verifyToken, _user3.default.canView, _user.default.getAllUsers);
router.get('/users/:userId', _auth.default.verifyToken, _user.default.getSingleUser);
router.post('/accounts/', _auth.default.verifyToken, _user.default.createAccount);
router.get('/accounts/:id', _auth.default.verifyToken, _user.default.fetchAccountById);
router.get('/transactions/:id', _auth.default.verifyToken, _user.default.getTransactionHistory);
router.post('/transactions/:accountnumber/debit', _auth.default.verifyToken, _user.default.debitAccount);
router.post('/transactions/:accountnumber/credit', _auth.default.verifyToken, _user.default.creditAccount);
router.delete('/:accountnumber', _auth.default.verifyToken, _user.default.deleteAccount);
router.patch('/account/:accountnumber', _auth.default.verifyToken, _user.default.activateAccount);
var _default = router;
exports.default = _default;