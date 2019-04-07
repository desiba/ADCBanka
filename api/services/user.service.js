import dummyData from '../utils/dummyData';
import Account from '../models/account.model';
import User from '../models/user.model';
import jwt from 'jsonwebtoken';


const secretKey = process.env.JWT_SECRET;


const UserService = {

    userSignIn(login){
        const user = dummyData.user.find(user => user.email == login);
        
        if(user != undefined){
            const payload = {
                id: user.id,
                firstname: user.email,
                lastname: user.firstname,
                password: user.password,
                type: user.type,
                isAdmin: user.isAdmin
            };

            const token = jwt.sign(payload, secretKey, {
                expiresIn: 3600,
            });
            const resp = {
              code: 200,
              message: 'User successfully loggedIn',
              user: payload,
              token: token,
            }
            return resp;
           
        }else{
          return "no user found";
        }
        
       
    },

    deleteAccount(accountnumber){
      
      const getAccountIndex = dummyData.account.findIndex(account => account.accountNumber == accountnumber);
      if(getAccountIndex >= 0){
          //const delAccount = dummyData.account[getAccountIndex];
          const newAccounts = dummyData.account.filter(account => account.accountNumber != accountnumber);
          dummyData.account = newAccounts;
          return newAccounts;
        }
      
      
    },

    creditAccount(accountNumber){
        const account = dummyData.account.find(account => account.accountNumber == accountNumber);
        return account;
    },

    debitAccount(accountNumber){
        const account = dummyData.account.find(account => account.accountNumber == accountNumber);
        return account;

    },

    getTransactionHistory(id){

        
        const account = dummyData.account.find(account => account.id == id);        
        const accountNumber = account.accountNumber;
        const accountHistory = dummyData.transaction.filter(transaction => transaction.accountNumber == accountNumber);
        if(accountHistory !== undefined){
            return accountHistory;
        }else{
            return 'Not Transaction History Found';
        }

    },

    fetchAccountById(id){
        const account = dummyData.account.find(account => account.id == id);
        if(account !== undefined){
            return account;
        }else{
            return 'Account Not Found';
        }
        //return account || { status: 'Not Found'};
    },

    createAccount(account){
        const accountLength = dummyData.account.length;
        const lastId = dummyData.account[accountLength - 1].id;
        const newId = lastId + 1;
        account.id = newId;
        const newAccount = new Account();
        newAccount.id = account.id;
        newAccount.accountNumber = account.accountNumber;
        newAccount.createdOn = account.createdOn;
        newAccount.owner = account.owner;
        newAccount.type = account.type;
        newAccount.status = account.status;
        newAccount.balance = account.balance;
        dummyData.account.push(newAccount);
        return newAccount;
    },

    
    

    

};

export default UserService;