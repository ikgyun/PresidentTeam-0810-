const axios = require('axios');
const qs = require('qs');
const pool = require('../../config/dbconnection');
const createToken = require('../../jwt');

const kakao = {
  clientID: `7c2d0d5ca1353c92a277225259c64d0c`,
  clientSecret: `Zg4gygtmVv74gpyexvLRUBGy3bNRz6yH`,
  redirectUri: 'http://localhost:3001/kakao/callback',

}

const get_code = async (req, res) => {
  const { code } = req.query
  let token;
  let user;



  try {
    token = await axios({
      method: 'POST',
      url: `https://kauth.kakao.com/oauth/token`,
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
      data: qs.stringify({
        grant_type: 'authorization_code',
        client_id: kakao.clientID,
        client_secret: kakao.clientSecret,
        redirectUri: kakao.redirectUri,
        code: code,
      })
    })
  } catch (e) {
    res.json(e.data);
  }



  try {
    user = await axios({
      method: 'GET',
      url: 'https://kapi.kakao.com/v2/user/me',
      headers: {
        Authorization: `Bearer ${token.data.access_token}`
      }
    })
  } catch (err) {
    res.json(err.data)
  }

  const userid = user.data.id;


  let connection;
  try {
    connection = await pool.getConnection(async conn => conn);
    try {
      const sql = `SELECT nickname,idx FROM user WHERE userid=?`
      const params = [userid];

      const [result] = await connection.execute(sql, params)
      const access_token = createToken(result[0].idx)
      const data = {
        isUser: true,
        nickname: result[0].nickname,
      }
      res.cookie('AccessToken', access_token, { httpOnly: true, secure: true })
      res.json(data);
    } catch (error) {//가입되지 않은 경우
      console.log('Query Error');
      console.log('비회원. 회원가입진행')
      console.log(error)
      const join = {
        isUser: false,
        userid: userid,
      }
      res.json(join)
    }
  } catch (error) {
    console.log('DB Error')
    console.log(error)
    res.json(error)
  } finally {
    connection.release();
  }


  //   connection.query(sql, (error, results) => {
  //     if (error) {
  //       res.json(error);
  //     } else {
  //       console.log(results)
  //       if (results.length === 0) {
  //         // 회원가입해야돼서. 
  //         const data = {
  //           userid: userid,
  //         }
  //         res.json(data)
  //       } else { // 회원가입이 되어 있는 경우는 토큰을 보내줌. 

  //         const token = createToken(userid);
  //         console.log('토큰 전송')
  //         res.cookie('presidentMaker', token, { httpOnly: true, secure: true });
  //         res.json('xxx')
  //       }
  //     }
  //   });
  // })

}

const get_image = (req, res) => {
  res.json(req.file.filename)
}




module.exports = {
  get_code,
  get_image
}


