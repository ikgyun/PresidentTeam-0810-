const pool = require('../../config/dbconnection');

const createComment = async (req, res) => {
  const { content } = req.body;
  const { board_id, comment_id } = req.params;
  const id = req.cookies.presidentMaker;
  let connection;
  try {
    connection = await pool.getConnection(async conn => conn);
    try {
      const sql = `INSERT INTO comment (content,board_id,writer,master) values(?,?,?,?)`
      const params = [content, board_id, id, comment_id];
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


//삭제된 댓글 처리해주기.
const showRyple = async (req, res) => {
  const { master_id, comment_id } = req.params;

  let connection;
  try {
    connection = await pool.getConnection(async conn => conn);
    try {
      const sql = `SELECT * FROM comment WHERE master=? and id>? LIMIT 10;`
      const params = [master_id, comment_id];
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



const updateComment = async (req, res) => {
  const { content } = req.body;
  const { comment_id } = req.params;
  const update = new Date();

  let connection;
  try {
    connection = await pool.getConnection(async conn => conn);
    try {
      const sql = `UPDATE comment SET content=${content},update=${update} WHERE id=${comment_id}`
      const params = [content, update, comment_id];
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



const deleteComment = async (req, res) => {
  const { comment_id } = req.params;

  let connection;
  try {
    connection = await pool.getConnection(async conn => conn);
    try {
      const sql = `UPDATE comment SET del=1 WHERE id=?`
      const params = [comment_id];
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
  createComment,
  showRyple,
  updateComment,
  deleteComment
}
