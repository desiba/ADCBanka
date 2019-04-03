import '@babel/polyfill';

import express  from 'express';
import bodyParser from 'body-parser';

import routes from './routes';

import logger from 'morgan';
 
const app = express();
const PORT = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));




app.use('/', routes);

app.get('/', (req, res) => {
    res.send('The API IS WORKING');
});





export default app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`);
  });
