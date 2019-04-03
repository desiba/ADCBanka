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
            owner: 1,
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
       
    ]



    
}