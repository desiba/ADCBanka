import UserService from '../services/user.service';

const UserController = {

  getTransactionHistory(req, res){
     const {id} = req.params;
     const foundAccHistory = UserService.getTransactionHistory(id);
     //console.log(foundAccHistory);
     if(foundAccHistory){
          return res.status(200).json({status: 'success', data: foundAccHistory});
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