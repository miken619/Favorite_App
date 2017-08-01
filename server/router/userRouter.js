const router = require('express').Router();
const controller = require('../controller/userController');

router.get('/findUser', controller.fetchUser);
router.post('/createUser', controller.createUser);

module.exports = router;