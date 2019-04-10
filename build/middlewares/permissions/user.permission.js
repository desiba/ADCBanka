"use strict";

var UserPermission = {};

UserPermission.canView = function (req, res, next) {
  if (!req.decodedToken) {
    return res.status(404).json({
      status: 404,
      data: "please login"
    });
  }

  if (req.decodedToken.isAdmin == true) {
    return res.status(404).json({
      status: 404,
      data: "permission not granted"
    });
  }

  next();
};

module.exports = UserPermission;