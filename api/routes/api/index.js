import express from 'express';
import v1 from './v1';

const router = express.Router();

router.get('/', (req, res) => {
    return res.send('api routes');
});

router.use('/v1', v1);

export default router;
