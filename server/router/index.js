const router = require('express').Router();

router.use('/users', require('./userRouter'));
router.use('/contents', require('./contentRouter'));

module.exports = router;