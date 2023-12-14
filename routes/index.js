let express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});
const jsonParser = express.json();
const homeController = require("../controllers/homeController.js");
const { route } = require('./admin');

router.get('/',homeController.getIndex);

module.exports = router;