const express = require('express');
const router = express.Router();
const movie_controller = require('../controller/movie.controller');

router.get('/',movie_controller.movie_list);
router.get('/:id',movie_controller.movie_detail);
router.post('/add',movie_controller.movie_add);
router.post('/actor/:id', movie_controller.movie_add_actor);
router.delete('/:id',movie_controller.movie_delete);
router.put('/:id',movie_controller.movie_edit);

module.exports = router;