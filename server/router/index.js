const router = require('express').Router();

router.use('/user', require('./userRouter'));
router.use('/content', require('./contentRouter'));

module.exports = router;