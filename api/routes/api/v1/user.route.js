import express from 'express';
import UserControllerJsObject  from '../../../controllers/user.controller';
import UserControllerDB from '../../../database/controllers/user.controller';
import validator from '../../../middlewares/validators/user';
import jwtVerify from '../../../middlewares/auth';
import permission from '../../../middlewares/permissions/user.permission';
import dotenv from 'dotenv';



const UserController = process.env.TYPE == "db" ? UserControllerDB : UserControllerJsObject;





const router = express.Router();



  
router.post('/auth/signup',validator.signup,UserController.userSignUp);
router.post('/auth/signin', UserController.userSignIn);
router.get('/users/',jwtVerify.verifyToken,permission.canView, UserController.getAllUsers);
router.get('/users/:userId',jwtVerify.verifyToken, UserController.getSingleUser);
router.post('/accounts/',jwtVerify.verifyToken, UserController.createAccount);
router.get('/accounts/:id',jwtVerify.verifyToken, UserController.fetchAccountById);

router.get('/transactions/:id',jwtVerify.verifyToken, UserController.getTransactionHistory);
router.post('/transactions/:accountnumber/debit',jwtVerify.verifyToken, UserController.debitAccount);
router.post('/transactions/:accountnumber/credit',jwtVerify.verifyToken, UserController.creditAccount);
router.delete('/:accountnumber',jwtVerify.verifyToken, UserController.deleteAccount);
router.patch('/account/:accountnumber',jwtVerify.verifyToken, UserController.activateAccount);




export default router;