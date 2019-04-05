import express from 'express';
import UserController  from '../../../controllers/user.controller';

const router = express.Router();

router.post('/', UserController.createAccount);
router.get('/:id', UserController.fetchAccountById);
router.get('/transaction/:id', UserController.getTransactionHistory);




export default router;