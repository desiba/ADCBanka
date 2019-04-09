import UserService from '../services/user.service';

const UserController = {

  /**
   * 
   * @param {object} req 
   * @param {object} res 
   * @returns {object} UserController array
   */

  activateAccount(req, res){

    const accountnumber = req.params.accountnumber;

    const status = req.body.status;

    const account = UserService.activateAccount(accountnumber, status);
     
    if(account != null){
      return  res.status(200).json({status: 200, data: account});
    }else{
      return  res.status(404).json({status: 404, data: "account not found"});
    }
  },

  userSignIn(req, res){
    const email = req.body.email;
    const user = UserService.userSignIn(email);
    if(user == undefined){
      return  res.status(200).json({status: 200, data: user});

    }else{
      return  res.status(404).json({status: 404, data: "not found"});

    }
  },

  deleteAccount(req, res){
    const {accountnumber} = req.params;
    const deletedAccount = UserService.deleteAccount(accountnumber);
    return  res.status(200).json({status: 200, data: deletedAccount});
  },

  

  creditAccount(req, res){
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
  },

  debitAccount(req, res){
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
    
  },

  getTransactionHistory(req, res){
     const {id} = req.params;
     const foundAccHistory = UserService.getTransactionHistory(id);
     //console.log(foundAccHistory);
     if(foundAccHistory){
          return res.status(200).json({status: 200, data: foundAccHistory});
     }else{
          return res.status(404).json({status: 'not found'});
     }
  },

  fetchAccountById(req, res){
    const {id} = req.params;

    const foundAccount = UserService.fetchAccountById(id);

    //console.log(foundAccount.status);

    if(foundAccount.status){
      return res.status(200).json({status: 'success', data: foundAccount});
    }else{
      return res.status(404).json({status: 'not found'});
    }

  },

  createAccount(req, res){
      const newAccount = req.body;
      const createdAccount = UserService.createAccount(newAccount);
      return res.status(200).json({
        status: 'success',
        data: createdAccount
    })
  },
  

    
};

export default UserController;