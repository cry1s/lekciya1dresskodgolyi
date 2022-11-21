const router = require('express').Router();
const { helloworld, aboutpage } = require('../controller/controller');

router.get('/', helloworld);
router.get('/about', aboutpage);

module.exports = router;
