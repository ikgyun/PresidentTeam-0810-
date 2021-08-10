const router = require('express').Router();
const apiController = require('./api.controller')
const multer = require('multer'); //npm install multer
const path = require('path'); //npm install path

/* 가져다쓰기 외우기 */
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, 'uploads')//폴더명
    },
    filename: function (req, file, callback) {
      callback(null, new Date().valueOf() + path.extname(file.originalname))
    } //path.extname(file.originalname)): 확장자 가져오는 코드
  }),
})

router.get('/kakao', apiController.get_code)
router.post('/image', upload.single('image'), apiController.get_image)


module.exports = router;