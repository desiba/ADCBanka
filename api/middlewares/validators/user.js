import Transformer from '../../utils/transformer'
const Validator = {};



Validator.signup = (req, res, next) => {
    req.checkBody('email', 'please supply a vali email').notEmpty().isEmailV2();
    req.checkBody('firstname', 'Please enter a valid firstName').notEmpty().isHumanName();
    req.checkBody('lastname', 'Please supply a valid lastName').notEmpty().isHumanName();
    req.checkBody('password', 'Please supply a valid password').isMinLen(6).isMaxLen(50);

    //req.checkBody('address', 'Please supply a valid lastName').notEmpty();//.isMinLen(6).isMaxLen(50);

    //req.checkBody('phonenumber', 'Please supply valid phoneNumber').notEmpty();//.isMinLen(10).isMaxLen(15);
    //req.checkBody('roleId', 'Please supply a valid username').notEmpty();
    req.asyncValidationErrors()
    .then(next)
    .catch(errors => res.status(400).json(Transformer.transformResponse(400,
      Transformer.transformExpressValidationErrors(errors), errors)));

};

Validator.login = (req, res, next) => {
    req.checkBody('email', 'please supply a valid email').notEmpty().isEmailV2();
    req.checkBody('password', 'Please supply a valid password').isMinLen(3).isMaxLen(50);
    req.asyncValidationErrors()
    .then(next)
    .catch(errors => res.status(400).json(Transformer.transformResponse(400,
      Transformer.transformExpressValidationErrors(errors), errors)));
};

export default Validator;