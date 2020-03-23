const express = require('express');
const router = express.Router();
const actor_controller = require('../controller/actor.controller');
const checkAuth = require('../middleware/checkAuth');

router.get('/', checkAuth, actor_controller.actor_list);
router.get('/:id', checkAuth, actor_controller.actor_detail);
router.post('/add', checkAuth, actor_controller.actor_add);
router.delete('/:id', checkAuth, actor_controller.actor_delete);
router.put('/:id', checkAuth, actor_controller.actor_edit);

module.exports = router;