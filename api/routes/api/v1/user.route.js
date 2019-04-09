import express from 'express';
import UserController  from '../../../controllers/user.controller';

const router = express.Router();

router.post('/', UserController.createAccount);
router.get('/:id', UserController.fetchAccountById);
router.get('/transaction/:id', UserController.getTransactionHistory);
router.post('/transaction/:accountnumber/debit', UserController.debitAccount);
router.post('/transaction/:accountnumber/credit', UserController.creditAccount);
router.delete('/:accountnumber', UserController.deleteAccount);
router.post('/auth/signin', UserController.userSignIn);
router.patch('/account/:accountnumber', UserController.activateAccount);




export default router;