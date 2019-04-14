import dummyData from '../utils/dummyData';
import Account from '../models/account.model';
import User from '../models/user.model';
import jwt from 'jsonwebtoken';
import createToken from '../utils/create.token';
import harshPassword from '../utils/hash.password';
import uuid from 'node-uuid';
import bcrypt from 'bcrypt';




const secretKey = process.env.JWT_SECRET;








class  UserService {

    static getSingleUser(id){
        
        const user = dummyData.user.find(user => user.id === parseInt(id));
        if(!user) return;
        const {password, isAdmin, ...otherUserDetail} = user;
        return otherUserDetail;
    }

    static getAllUsers(){
      return dummyData.user.map(user => {
          const {password,isAdmin, ...otherUserDetail} = user;
          return otherUserDetail;
      });
    }


    
    static signUpUser(userinput){
        //console.log(user.email);
        const accountIndex = dummyData.user.findIndex(user => user.email == userinput.email);
        if(accountIndex < 0){
            userinput.isAdmin = userinput.isAdmin ? userinput.isAdmin : false;
            
            const userLength = dummyData.user.length;
            const lastId = dummyData.user[userLength - 1].id;
            const newId = lastId + 1;
            userinput.id = newId;
            

            const hash = bcrypt.hashSync(userinput.password, 10);

            const newUser = new User();
                    newUser.id = userinput.id;
                    newUser.email = userinput.email;
                    newUser.firstname = userinput.firstname;
                    newUser.lastname = userinput.lastname;
                    newUser.password = hash;        
                    newUser.type = userinput.type;
                    newUser.isAdmin = userinput.isAdmin;
                    
                    dummyData.user.push(newUser);
                    return newUser;
            

        }else{
           return null;
        }

    }

    /**
     * This is a function.
     *
     * @param {integer} n - A string param
     * @return {json} A good string
     *
     * @example
     *
     *     foo(546463, 'dormant')
     */

    static activateAccount(accountnum, value){
        const accountIndex = dummyData.account.findIndex(account => account.accountNumber == accountnum);
        
        if(accountIndex >= 0){
            dummyData.account[accountIndex]['status'] = value;

            const updated = dummyData.account[accountIndex];
            return updated;

        }else{
            return null;
        }
        
    }

    static userSignIn(login){
        const user = dummyData.user.find(user => user.email == login);

        
        
        //const matched = bcrypt.compareSync(login.password, user.password) ? true : false; 
           // console.log(matched);
           
        
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

            
            const {password, ...payloadDetail} = payload;

            return {token, ...payloadDetail}
              
           
        }else{
          return "no user found";
        }
        
       
    }

   static deleteAccount(accountnumber){
      
      const getAccountIndex = dummyData.account.findIndex(account => account.accountNumber == accountnumber);
      if(getAccountIndex >= 0){
          //const delAccount = dummyData.account[getAccountIndex];
          const newAccounts = dummyData.account.filter(account => account.accountNumber != accountnumber);
          dummyData.account = newAccounts;
          return newAccounts;
        }
      
      
    }

    static creditAccount(accountNumber){
        const account = dummyData.account.find(account => account.accountNumber == accountNumber);
        return account;
    }

    static debitAccount(accountNumber){
        const account = dummyData.account.find(account => account.accountNumber == accountNumber);
        return account;

    }

    static getTransactionHistory(id){

        
        const account = dummyData.account.find(account => account.id == id);        
        const accountNumber = account.accountNumber;
        const accountHistory = dummyData.transaction.filter(transaction => transaction.accountNumber == accountNumber);
        if(accountHistory !== undefined){
            return accountHistory;
        }else{
            return 'Not Transaction History Found';
        }

    }

    static fetchAccountById(id){
        const account = dummyData.account.find(account => account.id == id);
        if(account !== undefined){
            return account;
        }else{
            return 'Account Not Found';
        }
        //return account || { status: 'Not Found'};
    }

    static createAccount(account){
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
    }

    
    

    

}

export default UserService;