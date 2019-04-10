import '@babel/polyfill';

import 'dotenv/config';

import express  from 'express';
import bodyParser from 'body-parser';

import routes from './routes';

import logger from 'morgan';
import validator from 'express-validator';
import customValidator from './middlewares/validators/custom-validator';
import customSanitizer from './middlewares/validators/custom-sanitizer';
 
const app = express();
const PORT = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));
app.use(validator({ customValidators: customValidator, customSanitizers: customSanitizer }));



app.use('/', routes);

app.get('/', (req, res) => {
    res.send('The API IS WORKING');
});





export default app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`);
  });
