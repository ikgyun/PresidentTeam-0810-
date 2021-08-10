const router = require('express').Router();
const electionController = require('./election.controller');
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


router.post('/politician', upload.single('image'), electionController.createPolitician);
router.post('/party', upload.single('image'), electionController.createParty);

router.post('/table', electionController.createElection);



module.exports = router;