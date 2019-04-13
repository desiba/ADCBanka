import UserService from '../services/user.service';

class UserController {

  static getSingleUser(req, res){
    const id = req.params.userId;
    const user = UserService.getSingleUser(id);
    if(user != null){
      return  res.status(200).json({status: 200, data: user});
    }
    return  res.status(404).json({status: 404, data: "not found"});
  }

  static getAllUsers(req, res){
    const users = UserService.getAllUsers();

      return  res.status(200).json({status: 200, data: users});
  }

  static userSignUp(req, res){
    const user = UserService.signUpUser(req.body);
    
    if(user != null){
      return  res.status(200).json({status: 200, data: user});
    }else{
      return  res.status(404).json({status: 404, data: "email already exist"});
    }
  }

  /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {object} UserController array
   */

  static activateAccount(req, res){

    const accountnumber = req.params.accountnumber;

    const status = req.body.status;

    const account = UserService.activateAccount(accountnumber, status);
     
    if(account != null){
      return  res.status(200).json({status: 200, data: account});
    }else{
      return  res.status(404).json({status: 404, data: "account not found"});
    }
  }

  static userSignIn(req, res){
    const email = req.body.email;
    const user = UserService.userSignIn(email);
    
    if(user != undefined){
        return  res.status(200).json({status: 200, data:user});

    }else{
        return  res.status(404).json({status: 404, data: "not found"});

    }
  }

  static deleteAccount(req, res){
    const {accountnumber} = req.params;
    const deletedAccount = UserService.deleteAccount(accountnumber);
    return  res.status(200).json({status: 200, data: deletedAccount});
  }

  

  static creditAccount(req, res){
    const {accountnumber} = req.params;
    const creditamount = req.body.amount;
    const accountFound = UserService.creditAccount(accountnumber);
    if(accountFound === undefined){
      return res.status(404).json({status: 404, data: 'account not found'});
   }else{
       const currentBalance =  accountFound.balance;

      if(creditamount >= 0.0){
         const newBalance =  creditamount + currentBalance;
         //update the account balance of the user
         accountFound['balance'] = newBalance;
         return res.status(200).json({status: 200, data: accountFound});
      }
   }
  }

  static debitAccount(req, res){
    const {accountnumber} = req.params;
    const debitamount = req.body.amount;
    const accountFound = UserService.debitAccount(accountnumber);
    if(accountFound === undefined){
       return res.status(404).json({status: 404, data: 'account not found'});
    }else{
    
    const currentBalance = accountFound.balance;
    if(debitamount > currentBalance){
      return res.status(401).json({status: 401, data: 'insufficient balance'});
    }else{
      const newBalance = currentBalance - debitamount;
      //update the account balance
      accountFound['balance'] = newBalance;
      return res.status(200).json({status: 'success', data: accountFound});

    }
  }
    
  }

  static getTransactionHistory(req, res){
     const {id} = req.params;
     const foundAccHistory = UserService.getTransactionHistory(id);
     
     if(foundAccHistory){
          return res.status(200).json({status: 200, data: foundAccHistory});
     }else{
          return res.status(404).json({status: 'not found'});
     }
  }

  static fetchAccountById(req, res){
    const {id} = req.params;

    const foundAccount = UserService.fetchAccountById(id);

    //console.log(foundAccount.status);

    if(foundAccount.status){
      return res.status(200).json({status: 'success', data: foundAccount});
    }else{
      return res.status(404).json({status: 'not found'});
    }

  }

  static createAccount(req, res){
      const newAccount = req.body;
      const createdAccount = UserService.createAccount(newAccount);
      return res.status(200).json({
        status: 'success',
        data: createdAccount
    })
  }
  

    
}

export default UserController;