"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var transformer = {},
    errCodes = [401, 403, 500, 400];

transformer.transformResponse = function (status, data) {
  if (errCodes.includes(status)) {
    return {
      status: status,
      error: data
    };
  }

  return {
    status: status,
    data: data
  };
};
/**
 *
 * @param {Array} errors
 * @returns {string}
 * @description transforms errors generated by express validator to a single message string
 * with each message separated by '|'
 * @returns {json} transformed validation error
 */


transformer.transformExpressValidationErrors = function (errors) {
  var msgs = '';
  if (!Array.isArray(errors)) return msgs;
  errors.forEach(function (item) {
    msgs += " ".concat(item.msg || '', " |");
  });
  return msgs;
};

var _default = transformer;
exports.default = _default;