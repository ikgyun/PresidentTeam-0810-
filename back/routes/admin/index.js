const router = require('express').Router();

const electionRouter = require('./election/index');



router.use('/election', electionRouter)

module.exports = router;