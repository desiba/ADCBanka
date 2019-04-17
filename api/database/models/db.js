// db.js
import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

pool.on('connect', () => {
  console.log('connected to the db');
});

/**
 * Create User Table
 */

const selectAll = (table) => {
    const qry = `SELECT * FROM ${table}`;

    pool.query(qry)
    .then((res) => {
      console.log(res.rows);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
}
const createUserTable = () => {
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
        modified_date TIMESTAMP,
      )`;

  pool.query(queryText)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
}

/**
 * Create Account Table
 */
const createAccountTable = () => {
  const queryText =
    `CREATE TABLE IF NOT EXISTS
      accounts(
        id UUID PRIMARY KEY,
        email VARCHAR(128) UNIQUE NOT NULL,
        password VARCHAR(128) NOT NULL,
        created_date TIMESTAMP,
        modified_date TIMESTAMP
      )`;

  pool.query(queryText)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
}

/**
 * Drop User Table
 */
const dropUserTable = () => {
  const queryText = 'DROP TABLE IF EXISTS users returning *';
  pool.query(queryText)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
}

/**
 * Drop Account Table
 */
const dropAccountTable = () => {
  const queryText = 'DROP TABLE IF EXISTS accounts returning *';
  pool.query(queryText)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
}

pool.on('remove', () => {
  console.log('client removed');
  process.exit(0);
});

module.exports = {
  selectAll,
  createUserTable,
  createAccountTable,
  dropUserTable,
  dropAccountTable
};

//require('make-runnable');