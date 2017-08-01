const router = require('express').Router();
const controller = require('../controller/contentController');

router.get('/fetchContent', controller.fetchContent);
router.post('/createContent', controller.createContent)

module.exports = router;