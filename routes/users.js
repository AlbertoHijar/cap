var express = require('express');
var router = express.Router();
var ctrl = require('../controllers/user_controller');

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});
router.get('/registro', ctrl.index)
router.post('/registro', ctrl.addUser);


module.exports = router;
