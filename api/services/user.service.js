import dummyData from '../utils/dummyData';
import Account from '../models/account.model';
const UserService = {

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