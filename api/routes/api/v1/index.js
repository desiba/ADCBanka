import express from 'express';
import user from './user.route';

const router = express.Router();

router.use('/user', user);

router.get('/', (req, res) => {
    return res.send('This is the api/v1 routes');
});



module.exports = router;