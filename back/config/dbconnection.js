const mysql = require('mysql2/promise');

const config = {
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'president',
}
const pool = mysql.createPool(config);

// let getConnection = async (callback) => {
//   await pool.getConnection(async (error, connection) => {
//     await callback(error, connection);
//     connection.release();
//   })
// }

// const connection = pool.getConnection(async conn => conn);

module.exports = pool;