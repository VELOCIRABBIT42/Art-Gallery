const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();


const PG_URI = `postgres://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@batyr.db.elephantsql.com/qbxdchuj`;
// const PG_URI = `postgres://qbxdchuj:8bN5J6MR-nnC4ileaFHfmDFnGUPs3iDY@batyr.db.elephantsql.com/qbxdchuj`;





const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};