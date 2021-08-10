const pool = require('../../config/dbconnection');
const jwtId = require('../../jwtId')
const showHead = `SELECT *
FROM (SELECT idx, nickname FROM user) AS user 
INNER JOIN board AS board
ON board.writer = user.idx
`

const pageblockHead = `SELECT COUNT(id) AS count FROM board `

const createArticle = async (req, res) => {
    const { subject, content } = req.body;
    const AccessToken = req.cookies.AccessToken;
    const writer = jwtId(AccessToken)
    let connection;
    try {
        connection = await pool.getConnection(async conn => conn);
        try {
            const sql = `INSERT INTO board (subject,content,writer) values(?,?,?)`
            const params = [subject, content, writer];
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



const showList = async (req, res) => {
    let count = 0;
    const pageblockSql = searchVerse(pageblockHead, req.query);

    let connection;
    try {
        connection = await pool.getConnection(async conn => conn);
        try {
            const params = [];
            const [result] = await connection.execute(pageblockSql, params)
            count = result[0].count
            const { page, rows, pageblock, totalPage } = makePageBlock(count, req.query);
            const searchSql = searchVerse(showHead, req.query) + ` ORDER BY board.id DESC LIMIT ?,?;`
            const pageParams = [(page - 1) * rows, rows]
            const [results] = await connection.execute(searchSql, pageParams)
            results.forEach(ele => {
                if (ele.del === 1) {
                    ele.subject = '삭제된 게시글입니다.'
                    ele.content = '삭제된 게시글입니다.'
                }
            });

            const data = {
                success: true,
                page: page,
                pageblock: pageblock,
                totalPage: totalPage,
                results: results,
            }
            res.json(data);
        } catch (error) {
            console.log('Query Error');
            const data = {
                success: false,
                error: error,
            }
            console.log(error)
            res.json(data)
        }
    } catch (error) {
        console.log('DB Error')
        console.log(error)
        res.json(error)
    } finally {
        connection.release();
    }
}








//댓글도 불러오기.
const showArticle = async (req, res) => {
    const { id } = req.params;

    let connection;
    try {
        connection = await pool.getConnection(async conn => conn);
        try {
            const sql = `SELECT * FROM board WHERE id=?`
            const params = [id];
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
};


//트리거로 updatedAt 바꿔주기.
const updateArticle = async (req, res) => {
    const { subject, content } = req.body;
    const { id } = req.params;
    const update = new Date();

    let connection;
    try {
        connection = await pool.getConnection(async conn => conn);
        try {
            const sql = `UPDATE board SET subject=?,content=?,updatedAt=? WHERE id=?`
            const params = [subject, content, update, id];
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


const deleteArticle = async (req, res) => {
    const id = req.params.id;

    let connection;
    try {
        connection = await pool.getConnection(async conn => conn);
        try {
            const sql = `UPDATE board SET del=1 WHERE id=?`
            const params = [id];
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
    showList,
    showArticle,
    createArticle,
    updateArticle,
    deleteArticle,
}









const searchVerse = (sql, obj) => {
    const { type, search, keyword } = obj;


    let whereVerse = '';

    switch (search) {
        case 'subject':
            whereVerse = ` WHERE subject LIKE '%${keyword}%'`
            break;
        case 'content':
            whereVerse += ` WHERE content LIKE '%${keyword}%'`
            break;
        case 'subject_content':
            whereVerse += ` WHERE (content LIKE '%${keyword}%' or subject LIKE '%${keyword}%')`
            break;
        case 'writer':
            whereVerse += ` WHERE (user.nickname LIKE '%${keyword}%')`
            break;
        default:
            break;
    }


    if (type !== "all") {
        whereVerse += `and like>24`
    }


    //searchSql: searchHead + whereVerse + ,

    return sql + whereVerse;
}

const makePageBlock = (cnt, obj) => {
    const { rows } = obj;
    let { page } = obj;
    console.log(cnt)
    const totalPage = Math.ceil(cnt / rows);
    if (page > totalPage) page = totalPage;

    let block = 10;

    while (page > block) {
        block += 10;
    }

    const pageblock = [];
    for (let i = block - 9; i <= block; i++) {
        pageblock.push(i);
        if (i === totalPage) break;
    }
    console.log(totalPage);
    console.log(page);
    console.log(rows);
    console.log(pageblock);
    return { page: page, rows: rows, pageblock: pageblock, totalPage: totalPage, }
}





const updateHit = () => {

}