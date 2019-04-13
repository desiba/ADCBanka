"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _user = _interopRequireDefault(require("../services/user.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserController =
/*#__PURE__*/
function () {
  function UserController() {
    _classCallCheck(this, UserController);
  }

  _createClass(UserController, null, [{
    key: "getSingleUser",
    value: function getSingleUser(req, res) {
      var id = req.params.userId;

      var user = _user.default.getSingleUser(id);

      if (user != null) {
        return res.status(200).json({
          status: 200,
          data: user
        });
      }

      return res.status(404).json({
        status: 404,
        data: "not found"
      });
    }
  }, {
    key: "getAllUsers",
    value: function getAllUsers(req, res) {
      var users = _user.default.getAllUsers();

      return res.status(200).json({
        status: 200,
        data: users
      });
    }
  }, {
    key: "userSignUp",
    value: function userSignUp(req, res) {
      var user = _user.default.signUpUser(req.body);

      if (user != null) {
        return res.status(200).json({
          status: 200,
          data: user
        });
      } else {
        return res.status(404).json({
          status: 404,
          data: "email already exist"
        });
      }
    }
    /**
     * 
     * @param {object} req 
     * @param {object} res 
     * @returns {object} UserController array
     */

  }, {
    key: "activateAccount",
    value: function activateAccount(req, res) {
      var accountnumber = req.params.accountnumber;
      var status = req.body.status;

      var account = _user.default.activateAccount(accountnumber, status);

      if (account != null) {
        return res.status(200).json({
          status: 200,
          data: account
        });
      } else {
        return res.status(404).json({
          status: 404,
          data: "account not found"
        });
      }
    }
  }, {
    key: "userSignIn",
    value: function userSignIn(req, res) {
      var email = req.body.email;

      var user = _user.default.userSignIn(email);

      if (user != undefined) {
        return res.status(200).json({
          status: 200,
          data: user
        });
      } else {
        return res.status(404).json({
          status: 404,
          data: "not found"
        });
      }
    }
  }, {
    key: "deleteAccount",
    value: function deleteAccount(req, res) {
      var accountnumber = req.params.accountnumber;

      var deletedAccount = _user.default.deleteAccount(accountnumber);

      return res.status(200).json({
        status: 200,
        data: deletedAccount
      });
    }
  }, {
    key: "creditAccount",
    value: function creditAccount(req, res) {
      var accountnumber = req.params.accountnumber;
      var creditamount = req.body.amount;

      var accountFound = _user.default.creditAccount(accountnumber);

      if (accountFound === undefined) {
        return res.status(404).json({
          status: 404,
          data: 'account not found'
        });
      } else {
        var currentBalance = accountFound.balance;

        if (creditamount >= 0.0) {
          var newBalance = creditamount + currentBalance; //update the account balance of the user

          accountFound['balance'] = newBalance;
          return res.status(200).json({
            status: 200,
            data: accountFound
          });
        }
      }
    }
  }, {
    key: "debitAccount",
    value: function debitAccount(req, res) {
      var accountnumber = req.params.accountnumber;
      var debitamount = req.body.amount;

      var accountFound = _user.default.debitAccount(accountnumber);

      if (accountFound === undefined) {
        return res.status(404).json({
          status: 404,
          data: 'account not found'
        });
      } else {
        var currentBalance = accountFound.balance;

        if (debitamount > currentBalance) {
          return res.status(401).json({
            status: 401,
            data: 'insufficient balance'
          });
        } else {
          var newBalance = currentBalance - debitamount; //update the account balance

          accountFound['balance'] = newBalance;
          return res.status(200).json({
            status: 'success',
            data: accountFound
          });
        }
      }
    }
  }, {
    key: "getTransactionHistory",
    value: function getTransactionHistory(req, res) {
      var id = req.params.id;

      var foundAccHistory = _user.default.getTransactionHistory(id);

      if (foundAccHistory) {
        return res.status(200).json({
          status: 200,
          data: foundAccHistory
        });
      } else {
        return res.status(404).json({
          status: 'not found'
        });
      }
    }
  }, {
    key: "fetchAccountById",
    value: function fetchAccountById(req, res) {
      var id = req.params.id;

      var foundAccount = _user.default.fetchAccountById(id); //console.log(foundAccount.status);


      if (foundAccount.status) {
        return res.status(200).json({
          status: 'success',
          data: foundAccount
        });
      } else {
        return res.status(404).json({
          status: 'not found'
        });
      }
    }
  }, {
    key: "createAccount",
    value: function createAccount(req, res) {
      var newAccount = req.body;

      var createdAccount = _user.default.createAccount(newAccount);

      return res.status(200).json({
        status: 'success',
        data: createdAccount
      });
    }
  }]);

  return UserController;
}();

var _default = UserController;
exports.default = _default;