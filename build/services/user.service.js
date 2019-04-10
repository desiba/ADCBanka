"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dummyData = _interopRequireDefault(require("../utils/dummyData"));

var _account = _interopRequireDefault(require("../models/account.model"));

var _user = _interopRequireDefault(require("../models/user.model"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _create = _interopRequireDefault(require("../utils/create.token"));

var _hash = _interopRequireDefault(require("../utils/hash.password"));

var _nodeUuid = _interopRequireDefault(require("node-uuid"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var secretKey = process.env.JWT_SECRET;

var UserService =
/*#__PURE__*/
function () {
  function UserService() {
    _classCallCheck(this, UserService);
  }

  _createClass(UserService, null, [{
    key: "getSingleUser",
    value: function getSingleUser(id) {
      var user = _dummyData.default.user.find(function (user) {
        return user.id === parseInt(id);
      });

      if (!user) return;

      var password = user.password,
          isAdmin = user.isAdmin,
          otherUserDetail = _objectWithoutProperties(user, ["password", "isAdmin"]);

      return otherUserDetail;
    }
  }, {
    key: "getAllUsers",
    value: function getAllUsers() {
      return _dummyData.default.user.map(function (user) {
        var password = user.password,
            isAdmin = user.isAdmin,
            otherUserDetail = _objectWithoutProperties(user, ["password", "isAdmin"]);

        return otherUserDetail;
      });
    }
  }, {
    key: "signUpUser",
    value: function signUpUser(userinput) {
      //console.log(user.email);
      var accountIndex = _dummyData.default.user.findIndex(function (user) {
        return user.email == userinput.email;
      });

      if (accountIndex < 0) {
        userinput.isAdmin = userinput.isAdmin ? userinput.isAdmin : false;
        var userLength = _dummyData.default.user.length;
        var lastId = _dummyData.default.user[userLength - 1].id;
        var newId = lastId + 1;
        userinput.id = newId;

        var hash = _bcrypt.default.hashSync(userinput.password, 10);

        var newUser = new _user.default();
        newUser.id = userinput.id;
        newUser.email = userinput.email;
        newUser.firstname = userinput.firstname;
        newUser.lastname = userinput.lastname;
        newUser.password = hash;
        newUser.type = userinput.type;
        newUser.isAdmin = userinput.isAdmin;

        _dummyData.default.user.push(newUser);

        return newUser;
      } else {
        return null;
      }
    }
    /**
     * This is a function.
     *
     * @param {integer} n - A string param
     * @return {json} A good string
     *
     * @example
     *
     *     foo(546463, 'dormant')
     */

  }, {
    key: "activateAccount",
    value: function activateAccount(accountnum, value) {
      var accountIndex = _dummyData.default.account.findIndex(function (account) {
        return account.accountNumber == accountnum;
      });

      if (accountIndex >= 0) {
        _dummyData.default.account[accountIndex]['status'] = value;
        var updated = _dummyData.default.account[accountIndex];
        return updated;
      } else {
        return null;
      }
    }
  }, {
    key: "userSignIn",
    value: function userSignIn(login) {
      var user = _dummyData.default.user.find(function (user) {
        return user.email == login;
      }); //const matched = bcrypt.compareSync(login.password, user.password) ? true : false; 
      // console.log(matched);


      if (user != undefined) {
        var payload = {
          id: user.id,
          firstname: user.email,
          lastname: user.firstname,
          password: user.password,
          type: user.type,
          isAdmin: user.isAdmin
        };

        var token = _jsonwebtoken.default.sign(payload, secretKey, {
          expiresIn: 3600
        });

        var resp = {
          code: 200,
          message: 'User successfully loggedIn',
          user: payload,
          token: token
        };
        return resp;
      } else {
        return "no user found";
      }
    }
  }, {
    key: "deleteAccount",
    value: function deleteAccount(accountnumber) {
      var getAccountIndex = _dummyData.default.account.findIndex(function (account) {
        return account.accountNumber == accountnumber;
      });

      if (getAccountIndex >= 0) {
        //const delAccount = dummyData.account[getAccountIndex];
        var newAccounts = _dummyData.default.account.filter(function (account) {
          return account.accountNumber != accountnumber;
        });

        _dummyData.default.account = newAccounts;
        return newAccounts;
      }
    }
  }, {
    key: "creditAccount",
    value: function creditAccount(accountNumber) {
      var account = _dummyData.default.account.find(function (account) {
        return account.accountNumber == accountNumber;
      });

      return account;
    }
  }, {
    key: "debitAccount",
    value: function debitAccount(accountNumber) {
      var account = _dummyData.default.account.find(function (account) {
        return account.accountNumber == accountNumber;
      });

      return account;
    }
  }, {
    key: "getTransactionHistory",
    value: function getTransactionHistory(id) {
      var account = _dummyData.default.account.find(function (account) {
        return account.id == id;
      });

      var accountNumber = account.accountNumber;

      var accountHistory = _dummyData.default.transaction.filter(function (transaction) {
        return transaction.accountNumber == accountNumber;
      });

      if (accountHistory !== undefined) {
        return accountHistory;
      } else {
        return 'Not Transaction History Found';
      }
    }
  }, {
    key: "fetchAccountById",
    value: function fetchAccountById(id) {
      var account = _dummyData.default.account.find(function (account) {
        return account.id == id;
      });

      if (account !== undefined) {
        return account;
      } else {
        return 'Account Not Found';
      } //return account || { status: 'Not Found'};

    }
  }, {
    key: "createAccount",
    value: function createAccount(account) {
      var accountLength = _dummyData.default.account.length;
      var lastId = _dummyData.default.account[accountLength - 1].id;
      var newId = lastId + 1;
      account.id = newId;
      var newAccount = new _account.default();
      newAccount.id = account.id;
      newAccount.accountNumber = account.accountNumber;
      newAccount.createdOn = account.createdOn;
      newAccount.owner = account.owner;
      newAccount.type = account.type;
      newAccount.status = account.status;
      newAccount.balance = account.balance;

      _dummyData.default.account.push(newAccount);

      return newAccount;
    }
  }]);

  return UserService;
}();

var _default = UserService;
exports.default = _default;