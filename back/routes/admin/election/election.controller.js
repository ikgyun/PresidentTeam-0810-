const pool = require('../../../config/dbconnection');

const createPolitician = async (req, res) => {
  const { name } = req.body;
  const image = req.file.filename;

  let connection;
  try {
    connection = await pool.getConnection(async conn => conn);
    try {
      const sql = `INSERT INTO politician (name,image) values(?,?)`
      const params = [name, image]
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



const createParty = async (req, res) => {
  const { name } = req.body;
  const image = req.file.filename;

  let connection;
  try {
    connection = await pool.getConnection(async conn => conn);
    try {
      const sql = `INSERT INTO party (name,image) values(?,?)`
      const params = [name, image]
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

const createElection = async (req, res) => {
  const { name, table } = req.body;
  const temp = JSON.parse(table)

  let connection;
  try {
    connection = await pool.getConnection(async conn => conn);
    try {
      const createEelectionSql = `INSERT INTO vote_title (name) values(?)`
      const params = [name,]
      const [rows] = await connection.execute(createEelectionSql, params)
      const tableIndex = rows.insertId

      const maketableSql = `INSERT INTO vote_info (vote_idx,politician_idx,party_idx) value(?,?,?)`
      temp.forEach(async (ele) => {
        const man = ele[0];
        const party = ele[1];
        const params = [tableIndex, man, party];
        const result = await connection.execute(maketableSql, params);
        console.log(result);
      });
      res.json(rows);// 완료 데이터 넘겨주기.
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
  createPolitician,
  createParty,
  createElection,
}