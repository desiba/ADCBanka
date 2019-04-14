[![Coverage Status](https://coveralls.io/repos/github/desiba/ADCBanka/badge.svg?branch=develop)](https://coveralls.io/github/desiba/ADCBanka?branch=develop)  [![Maintainability](https://api.codeclimate.com/v1/badges/6bf298446b1a2120f4e0/maintainability)](https://codeclimate.com/github/desiba/ADCBanka/maintainability)  [![Test Coverage](https://api.codeclimate.com/v1/badges/6bf298446b1a2120f4e0/test_coverage)](https://codeclimate.com/github/desiba/ADCBanka/test_coverage)   [![Build Status](https://travis-ci.com/desiba/ADCBanka.svg?branch=develop)](https://travis-ci.com/desiba/ADCBanka)
# Banka App (ADC BOOTCAMP Banka App)


## Technologies Used

[node]: (https://nodejs.org)

- [Node.js](node) A run time environment based off Chrome's v8 Engines for writing Javascript server-side applications.
- [Express.js](https://expressjs.com) - Web application framework based on Node.js.
- [ESLint](https://eslint.org/) - A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript.
- [Airbnb](https://www.npmjs.com/package/eslint-config-airbnb) style guide was followed.
- [Babel]() Babel for transpiling
- [Heroku]() Heoku for hosting the api services
- [Swagger]() Swagger to build the api documentation



## Documentation.
  
  * Navigate to https://alcbanka.herokuapp.com/api-docs/ to test current endpoints with dummy data


## API Endpoints

| METHOD | DESCRIPTION                             | ENDPOINTS                           |
| ------ | --------------------------------------- | ------------------------------------|
| POST   | User can create account                 | `/api/v1/user/accounts`             |
| GET    | admin get all users                     | `/api/v1/user/users/`               |
| GET    | User can get account by id              | `/api/v1/user/accounts/:id`          |
| GET    | User can get transaction by id          | `/api/v1/user/transactions/:id`      |
| POST   | Admin can debit user account            | `/api/v1/user/transactions/:accountnumber/:debit`|
| POST   | Admin can credit user account           | `/api/v1/user/transactions/:accountnumber/:credit`|
| DELETE | Admin can delete user account by acnum  | `/api/v1/user/:accountnumber`       |
| POST   | User can sign in to profile             | `/api/v1/user/auth/signin`          |
| POST   | User can sign up for profile            | `/api/v1/user/auth/signup`          |
| PATCH  | Admin can activate/deactivate account   | `/api/v1/user/account/:accountnum`  |


## Acknowledgments

- [Andela](https://andela.com/)


## Author

- AYODEJI Desmond 
