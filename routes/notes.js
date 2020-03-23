const express = require('express');
const router = express.Router();
const note_controller = require('../controller/note.controller');

router.get('/',note_controller.note_list);
router.get('/:id',note_controller.note_detail);
router.delete('/:id',note_controller.note_delete);
router.post('/add',note_controller.note_add);
router.put('/:id',note_controller.note_edit);

module.exports = router;