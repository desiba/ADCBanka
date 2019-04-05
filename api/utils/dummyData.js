export default{
    account: [
          {
              id: 1,
              accountNumber: 34623475,
              createdOn: '21/04/2018',
              owner: 1,
              type: 'savings',
              status: 'draft',
              balance: 34.50
          },
          {
            id: 2,
            accountNumber: 546463,
            createdOn: '24/03/2017',
            owner: 2,
            type: 'current',
            status: 'active',
            balance: 36.45
        }
    ],
    user: [
        {
            id: 1,
            email: 'des@aol.com',
            firstname: 'Fred',
            lastname: 'Amata',
            password: 'wisdom',
            type: 'client',
            isAdmin: false
        },
        {
            id: 2,
            email: 'klint@aol.com',
            firstname: 'Kbule',
            lastname: 'Leo',
            password: 'west',
            type: 'client',
            isAdmin: false
        },
       
    ],

    transaction: [
        {
            id: 1,
            createdOn: '02/03/2018',
            type: 'credit',
            accountNumber: 34623475,
            cashier: 2,
            amount: 40.0,
            oldBalance: 21.90,
            newBalance: 11.76
        },
        {
            id: 2,
            createdOn: '03/05/2019',
            type: 'debit',
            accountNumber: 5738739,
            cashier: 2,
            amount: 41.0,
            oldBalance: 22.90,
            newBalance: 15.76
        },
        {
            id: 3,
            createdOn: '10/04/2019',
            type: 'debit',
            accountNumber: 34623475,
            cashier: 2,
            amount: 42.0,
            oldBalance: 31.90,
            newBalance: 21.76
        },
       
    ]



    
}