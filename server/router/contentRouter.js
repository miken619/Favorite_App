const router = require('express').Router();
const controller = require('../controller/contentController');

router.get('/findContent', controller.fetchContent);
router.post('/createContent', controller.createContent)

module.exports = router;