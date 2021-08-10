const pool = require('../../config/dbconnection');


const createUser = async (req, res) => { // 회원가입 완료되면 쿠키만들어서 넘겨주기.
    console.log(req.body);

    let connection;
    try {
        connection = await pool.getConnection(async conn => conn);
        try {
            const { userid, nickname, hometown, residence, gender, age } = req.body;
            const params = [userid, nickname, hometown, residence, gender, age]
            const sql = `INSERT INTO USER (userid,nickname,hometown,residence,gender,age) 
                            values(?,?,?,?,?,?)`
            const [rows] = await connection.execute(sql, params)
            const data = {
                isUser: true,
                userid: userid,
                nickname: nickname,
            }
            res.json(data);
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



//투표까지 만들고 하기. 
const showUser = async (req, res) => {
    const { targetidx } = req.query;
    const { useridx } = req.headers;

    let connection;
    try {
        connection = await pool.getConnection(async conn => conn);
        try {
            const sql = `SELECT * FROM user WHERE id = ?`
            const params = [targetidx]
            const results = await connection.execute(sql, params)
            console.log(results[0][0])
            res.json(results[0][0]);
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

const updateUser = async (req, res) => {
    const { nickname, hometown, residence, gender, age } = req.body;
    //쿠키에서 idx 가져오기. 
    const idx = 1;
    let connection;
    try {
        connection = await pool.getConnection(async conn => conn);
        try {

            const sql = `UPDATE user SET nickname=?,hometown=?,residence=?,gender=?,age=? WHERE id=?`
            const params = [nickname, hometown, residence, gender, age, idx]
            const results = await connection.execute(sql, params)
            console.log(results[0][0])
            res.json(results[0][0]);
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

const deleteUser = async (req, res) => {
    const { idx } = req.query;


    let connection;
    try {
        connection = await pool.getConnection(async conn => conn);
        try {
            const sql = `UPDATE user SET status=1 WHERE id=?`
            const params = [idx]
            const [rows] = await connection.execute(sql, params)
            console.log(rows)
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
    createUser,
    showUser,
    updateUser,
    deleteUser,
}

// id,userid,nickname,hometown,residence,gender,age,status,show 
const clearInfo = (results, useridx) => {
    const target = results[0];
    // const targetArr = Object.entries(target); 
    let voteHistory;

    // 투표이력도 가져와야함

    /*
    투표이력 가져오는 함수
    */

    if (target.id === useridx || target.show & (1 << 0)) {
        //투표이력 가져오는 쿼리.
        console.log('투표이력가져오는 쿼리')

    }

    delete target.id;
    delete target.userid;
    console.log(target.show);
    for (let i = 0; i < 5; i++) {
        if (target.show & (1 << i)) {
            console.log(targetArr[i + 1])
        }
    }

    return;
}