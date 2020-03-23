const express = require('express');
const router = express.Router();
const category_controller = require('../controller/category.controller');

router.get('/',category_controller.category_list);
router.get('/:id',category_controller.category_detail);
router.delete('/:id',category_controller.category_delete);
router.post('/add',category_controller.category_add);
router.put('/:id',category_controller.category_edit);

module.exports = router;