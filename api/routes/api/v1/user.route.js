import express from 'express';
import UserController  from '../../../controllers/user.controller';

const router = express.Router();
router.post('/', UserController.createAccount);
router.get('/:id', UserController.fetchAccountById);



export default router;