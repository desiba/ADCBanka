import express from 'express';
import UserController  from '../../../controllers/user.controller';
import validator from '../../../middlewares/validators/user';

const router = express.Router();

router.post('/account/', UserController.createAccount);
router.get('/:id', UserController.fetchAccountById);
router.get('/transaction/:id', UserController.getTransactionHistory);
router.post('/transaction/:accountnumber/debit', UserController.debitAccount);
router.post('/transaction/:accountnumber/credit', UserController.creditAccount);
router.delete('/:accountnumber', UserController.deleteAccount);
router.post('/auth/signin',validator.login, UserController.userSignIn);

router.post('/auth/signup', UserController.userSignUp);

router.patch('/account/:accountnumber', UserController.activateAccount);




export default router;