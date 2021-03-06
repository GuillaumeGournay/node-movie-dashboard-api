const express = require('express');
const router = express.Router();
const country_controller = require('../controller/country.controller');

router.get('/',country_controller.country_list);
router.post('/add',country_controller.country_add);
router.get('/:id',country_controller.country_detail);
router.delete('/:id',country_controller.country_delete);
router.put('/:id',country_controller.country_edit);

module.exports = router;