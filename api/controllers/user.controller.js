import UserService from '../services/user.service';

const UserController = {

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