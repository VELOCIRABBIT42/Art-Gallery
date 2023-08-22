const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();


const PG_URI = `postgres://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}.db.elephantsql.com/qbxdchuj`;



const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};