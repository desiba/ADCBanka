import permissions from '../../config/permissions';
import Transformer from '../../utils/transformer';



const MealPermission = {};

MealPermission.canView = (req, res, next) => {

    if(!req.decodedToken){
        return res.status(401).json(0, 'No token found');

    }

    console.log(permissions.GLOBAL);

    const PermissionList = req.decodedToken.permissions,
     canView = PermissionList.includes(PermissionList.GLOBAL) || PermissionList.includes(PermissionList.READ_MEAL);

     if(!canView){
         return res.status(403).json(0, 'You do not have the permission to perform this operation');
     }

     next();
};


MealPermission.canAdd = (req, res, next) => {
    if (!req.decodedToken) {
      return res.status(401).json(Transformer.transformResponse(0, 'No token found, how did you get to this point?'));
    }
  
    const permissionList = req.decodedToken.permissions,
      canCreate = permissionList.includes(PermissionList.GLOBAL)
      || permissionList.includes(PermissionList.WRITE_MEAL);
    if (!canCreate) {
      return res.status(200).json(0, 'You do not have the permission to perform this operation!');
    }
    next();
  };

  module.exports = MealPermission;