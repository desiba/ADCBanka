import dummyData from '../utils/dummyData';
import Account from '../models/account.model';
import User from '../models/user.model';
const UserService = {

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