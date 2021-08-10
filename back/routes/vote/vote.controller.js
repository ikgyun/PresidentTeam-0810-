const pool = require('../../config/dbconnection');

const makeVoteTalbe = async (req, res) => {

  let connection;
  try {
    connection = await pool.getConnection(async conn => conn);
    try {
      const [rows] = await connection.execute(sql, params)
      console.log(rows);
      res.json(rows);
    } catch (error) {
      console.log('Query Error');
      console.log(error)
      res.json(error)
    }
  } catch (error) {
    console.log('DB Error')
    console.log(error)
    res.json(error)
  } finally {
    connection.release();
  }

}

module.exports = {
  makeVoteTalbe,
}