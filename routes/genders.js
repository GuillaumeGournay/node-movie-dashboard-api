const express = require('express');
const router = express.Router();
const gender_controller = require('../controller/gender.controller');

router.get('/',gender_controller.gender_list);
router.post('/add',gender_controller.gender_add);
router.get('/:id',gender_controller.gender_detail);
router.delete('/:id',gender_controller.gender_delete);
router.put('/:id',gender_controller.gender_edit);

module.exports = router;