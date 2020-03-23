var express = require('express');
var router = express.Router();
const user_controller = require('../controller/user.controller');
const checkAuth = require('../middleware/checkAuth');

router.get('/', user_controller.user_list);
router.get('/:id', user_controller.user_detail);
router.post('/signin', user_controller.user_signin);
router.post('/login', user_controller.user_login);
router.delete('/:id', user_controller.user_delete);
router.put('/:id',user_controller.user_edit);

module.exports = router;
