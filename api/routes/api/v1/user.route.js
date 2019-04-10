import express from 'express';
import UserController  from '../../../controllers/user.controller';
import validator from '../../../middlewares/validators/user';
import jwtVerify from '../../../middlewares/auth';
import permission from '../../../middlewares/permissions/user.permission';



const router = express.Router();

router.get('/users/:userId',jwtVerify.verifyToken, UserController.getSingleUser);
router.get('/users/',jwtVerify.verifyToken,permission.canView, UserController.getAllUsers);
router.post('/account/',jwtVerify.verifyToken, UserController.createAccount);
router.get('/account/:id',jwtVerify.verifyToken, UserController.fetchAccountById);
router.get('/transaction/:id',jwtVerify.verifyToken, UserController.getTransactionHistory);
router.post('/transaction/:accountnumber/debit',jwtVerify.verifyToken, UserController.debitAccount);
router.post('/transaction/:accountnumber/credit',jwtVerify.verifyToken, UserController.creditAccount);
router.delete('/:accountnumber',jwtVerify.verifyToken, UserController.deleteAccount);
router.post('/auth/signin',validator.login, UserController.userSignIn);
router.post('/auth/signup',validator.signup,UserController.userSignUp);
router.patch('/account/:accountnumber',jwtVerify.verifyToken, UserController.activateAccount);




export default router;