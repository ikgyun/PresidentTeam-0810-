const router = require('express').Router();
const mainRouter = require('./main/index');
const userRouter = require('./user/index');
const boardRouter = require('./board/index');
const apiRouter = require('./api/index');
const voteRouter = require('./vote/index');
const adminRouter = require('./admin/index');

router.use('/', mainRouter);
router.use('/user', userRouter);
router.use('/board', boardRouter);
router.use('/api', apiRouter);
router.use('/admin', adminRouter)
router.use('/vote', voteRouter)

module.exports = router;