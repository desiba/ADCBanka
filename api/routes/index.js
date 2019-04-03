import express from 'express';
import api from './api';

const router = express.Router();

router.get('/', (req, res) => {
    return res.send("You have reached index routes");
});

router.use('/api', api);

router.all('*', (reg, res) => {
    const errorMessage = {
        message: 'Wrong route enter',
        endpoints: {
            signup: 'POST /api/v1/auth/signup',
            login: 'POST /api/v1/auth/login',
        },
        success: false
    };

    res.status(404).json(errorMessage);
});

export default router;