/**
 * @swagger
 * securityDefinitions:
 *   Bearer:
 *     type: apiKey
 *     name: Authorization
 *     in: header
 * definition:
 *   User:
 *     properties:
 *       email:
 *         type: string
 *         format: email
 *       firstName:
 *         type: string
 *       lastName:
 *         type: string
 *       password:
 *         type: string
 *       type:
 *         type: string
 *       isAdmin:
 *         type: boolean
 *       
 *   Login:
 *     properties:
 *       email:
 *         type: string
 *         format: email
 *       password:
 *         type: string
 *   UserModel:
 *     properties:
 *       user:
 *         $ref: '#/definitions/User'
 *   LoginModel:
 *     properties:
 *       login:
 *         $ref: '#/definitions/Login'
 *   UserObject:
 *     properties:
 *       id:
 *         type: string
 *       firstName:
 *         type: string
 *       lastName:
 *         type: string
 *       phoneNumber:
 *         type: string
 *       address:
 *         type: string
 *       email:
 *         type: string
 *   UserResponse:
 *     properties:
 *       message:
 *         type: string
 *       token:
 *         type: string
 *       user:
 *         $ref: '#/definitions/UserObject'
 *   ResponseObjectSingle:
 *     properties:
 *       status:
 *         type: number
 *       data:
 *         $ref: '#/definitions/UserResponse'
 *   ResponseObjectLogout:
 *     properties:
 *       status:
 *         type: number
 *       data:
 *         type: object
 *         properties:
 *         message:
 *           type: string
 *   ErrorObject:
 *     properties:
 *       status:
 *         type: number
 *       error:
 *         type: string
 *   Token:
 *     properties:
 *       token:
 *         type: string
 */


/**
 * @swagger
 * /user/auth/signup:
 *   post:
 *     tags:
 *       - User
 *     description: Send the admin an email
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: contact
 *         description: mail details
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Contact'
 *     responses:
 *       200:
 *         description: Mail successfully sent
 *         schema:
 *           $ref: '#definitions/ContactResponse'
 *       400:
 *         description: An error occured
 *         schema:
 *           $ref: '#/definitions/ErrorObject'
 */


 /**
 * @swagger
 * /user/auth/signin:
 *   post:
 *     tags:
 *       - Contact
 *     description: Send the admin an email
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: contact
 *         description: mail details
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Contact'
 *     responses:
 *       200:
 *         description: Mail successfully sent
 *         schema:
 *           $ref: '#definitions/ContactResponse'
 *       400:
 *         description: An error occured
 *         schema:
 *           $ref: '#/definitions/ErrorObject'
 */

 /**
 * @swagger
 * /user/:accountnumber:
 *   delete:
 *     tags:
 *       - Contact
 *     description: Send the admin an email
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: contact
 *         description: mail details
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Contact'
 *     responses:
 *       200:
 *         description: Mail successfully sent
 *         schema:
 *           $ref: '#definitions/ContactResponse'
 *       400:
 *         description: An error occured
 *         schema:
 *           $ref: '#/definitions/ErrorObject'
 */


 /**
 * @swagger
 * /user/users:
 *   get:
 *     tags:
 *       - Contact
 *     description: Send the admin an email
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: contact
 *         description: mail details
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Contact'
 *     responses:
 *       200:
 *         description: Mail successfully sent
 *         schema:
 *           $ref: '#definitions/ContactResponse'
 *       400:
 *         description: An error occured
 *         schema:
 *           $ref: '#/definitions/ErrorObject'
 */



 /**
 * @swagger
 * /users/:userId:
 *   get:
 *     tags:
 *       - Contact
 *     description: Send the admin an email
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: contact
 *         description: mail details
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Contact'
 *     responses:
 *       200:
 *         description: Mail successfully sent
 *         schema:
 *           $ref: '#definitions/ContactResponse'
 *       400:
 *         description: An error occured
 *         schema:
 *           $ref: '#/definitions/ErrorObject'
 */




/**
 * @swagger
 * /user/accounts/:accountnumber:
 *   patch:
 *     tags:
 *       - Contact
 *     description: Send the admin an email
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: contact
 *         description: mail details
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Contact'
 *     responses:
 *       200:
 *         description: Mail successfully sent
 *         schema:
 *           $ref: '#definitions/ContactResponse'
 *       400:
 *         description: An error occured
 *         schema:
 *           $ref: '#/definitions/ErrorObject'
 */


 /**
 * @swagger
 * /user/transactions/:accountnumber/credit:
 *   post:
 *     tags:
 *       - Contact
 *     description: Send the admin an email
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: contact
 *         description: mail details
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Contact'
 *     responses:
 *       200:
 *         description: Mail successfully sent
 *         schema:
 *           $ref: '#definitions/ContactResponse'
 *       400:
 *         description: An error occured
 *         schema:
 *           $ref: '#/definitions/ErrorObject'
 */



 /**
 * @swagger
 * /user/transactions/:id:
 *   get:
 *     tags:
 *       - Contact
 *     description: Send the admin an email
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: contact
 *         description: mail details
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Contact'
 *     responses:
 *       200:
 *         description: Mail successfully sent
 *         schema:
 *           $ref: '#definitions/ContactResponse'
 *       400:
 *         description: An error occured
 *         schema:
 *           $ref: '#/definitions/ErrorObject'
 */



 /**
 * @swagger
 * /user/transactions/:accountnumber/debit:
 *   post:
 *     tags:
 *       - Contact
 *     description: Send the admin an email
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: contact
 *         description: mail details
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Contact'
 *     responses:
 *       200:
 *         description: Mail successfully sent
 *         schema:
 *           $ref: '#definitions/ContactResponse'
 *       400:
 *         description: An error occured
 *         schema:
 *           $ref: '#/definitions/ErrorObject'
 */



/**
 * @swagger
 * /user/accounts/:id:
 *   get:
 *     tags:
 *       - Contact
 *     description: Send the admin an email
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: contact
 *         description: mail details
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Contact'
 *     responses:
 *       200:
 *         description: Mail successfully sent
 *         schema:
 *           $ref: '#definitions/ContactResponse'
 *       400:
 *         description: An error occured
 *         schema:
 *           $ref: '#/definitions/ErrorObject'
 */

/**
 * @swagger
 * /user/accounts:
 *   post:
 *     tags:
 *       - Contact
 *     description: Send the admin an email
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: contact
 *         description: mail details
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Contact'
 *     responses:
 *       200:
 *         description: Mail successfully sent
 *         schema:
 *           $ref: '#definitions/ContactResponse'
 *       400:
 *         description: An error occured
 *         schema:
 *           $ref: '#/definitions/ErrorObject'
 */