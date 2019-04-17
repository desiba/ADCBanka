import { Pool} from 'pg';
import { debug} from 'debug';
import dotenv from 'dotenv';
import '@babel/polyfill';

dotenv.config();

class Model{
    constructor(table){
        this.table = table;
        this.pool = Model.initConn();
        this.logger = debug("pg/model");
        this.pool.on("error", (err) => {
            this.logger("error occured");
        })

        
    }

    static initConn(){
        const {USER, HOST, PASSWORD, DATABASE, PORT} = process.env;
        const poolSettings = {
            user: USER,
            host: HOST,
            password: PASSWORD,
            database: DATABASE,
            port: PORT
        
        }

        //debug('pg/model')('Pool settings: ${JSON.stringify(poolSettings)}');
        return new Pool(poolSettings);
    }

    async select(params, constraint){
        
        const res = await this.pool.query(`select ${params} from ${this.table} WHERE ${constraint}`);
        return res;
    }



     logJSON(data){
        return this.logger(JSON.stringify(data, null, "\t"));
    }

    static createUserTable(){
        const queryText =
          `CREATE TABLE IF NOT EXISTS
            users(
              id UUID PRIMARY KEY,
              email VARCHAR(128) UNIQUE NOT NULL,
              firstname VARCHAR(50) NOT NULL,
              lastname VARCHAR(50) NOT NULL,
              password TEXT NOT NULL,
              type VARCHAR(50) NOT NULL,
              isAdmin BOOLEAN NOT NULL,
              created_date TIMESTAMP,
              modified_date TIMESTAMP
            )`;
      
        const status = this.pool.query(queryText);
         console.log(status);
          
      }

    
}

export default Model;