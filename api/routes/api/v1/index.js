import express from 'express';
import user from './user.route';

import swaggerJSDoc from 'swagger-jsdoc';

const router = express.Router();

// Swagger jsdoc configuration
const swaggerDefinition = {
    info: {
      title: 'Node Swagger API',
      version: '1.0.0',
      description: 'Api documentation for ADC Andela.',
    },
    host: 'localhost:3000',
    basePath: '/api/v1'
  };

  // options for the swagger docs
const options = {

    // import swaggerDefinitions
    swaggerDefinition,
  
    // path to the API docs
    apis: ['./api/swagger/*.js']
    
  
  };

  

  // initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

// setup swagger route
router.get('/swagger.json', (req, res) => {
  res.header('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

router.use('/user', user);

router.get('/', (req, res) => {
    return res.send('This is the api/v1 routes');
});



export default router;