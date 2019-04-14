import '@babel/polyfill';

import 'dotenv/config';

import express  from 'express';
import bodyParser from 'body-parser';

import routes from './routes';
import path from 'path';

import logger from 'morgan';
import validator from 'express-validator';
import customValidator from './middlewares/validators/custom-validator';
import customSanitizer from './middlewares/validators/custom-sanitizer';

import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import { Module } from 'module';

//const bootcamper = new Module("tablename");

 
const app = express();



 
  



const PORT = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));
app.use(validator({ customValidators: customValidator, customSanitizers: customSanitizer }));



app.use('/api-docs', express.static(path.join(__dirname, '../api/public/api-docs')));


app.use('/', routes);




app.get('/', (req, res) => {
    res.send('The API IS WORKING');
});





export default app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`);
  });
