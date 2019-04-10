import PermissionList from '../../config/permissions';

const OrderPermission = {};

// admin permissions
OrderPermission.canView = (req, res, next) => {
  if (!req.decodedToken) {
    return res.status(401).json(Transformer.transformResponse(0, 'No token found, how did you get to this point?'));
  }

  const permissionList = req.decodedToken.permissions,
    canView = permissionList.includes(PermissionList.GLOBAL)
      || permissionList.includes(PermissionList.READ_ORDER);
  if (!canView) {
    return res.status(403).json(0, 'You do not have the permission to perform this operation!');
  }
  next();
};

OrderPermission.canCreate = (req, res, next) => {
  if (!req.decodedToken) {
    return res.status(401).json(0, 'No token found, how did you get to this point?');
  }

  const permissionList = req.decodedToken.permissions,
    canCreate = permissionList.includes(PermissionList.GLOBAL)
    || permissionList.includes(PermissionList.WRITE_ORDER);
  if (!canCreate) {
    return res.status(200).json(0, 'You do not have the permission to perform this operation!');
  }
  next();
};

module.exports = OrderPermission;