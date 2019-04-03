import UserService from '../services/user.service';

const UserController = {

  fetchAccountById(req, res){
    const {id} = req.params;

    const foundAccount = UserService.fetchAccountById(id);

    console.log(foundAccount.status);

    if(foundAccount.status){
      return res.status(200).json({status: 'success', data: foundAccount});
    }else{
      return res.status(404).json({status: 'not found'});
    }

    
    //if(foundAccount.status){
      //return res.status(404).json({status: foundAccount.accountNumber});
    //}
    //return res.status(200).json({status: 'success', data: foundAccount});
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