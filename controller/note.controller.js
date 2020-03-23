const Note = require('../models/').Note;
const Movie = require('../models/').Movie;

/**
 * @api {get} /notes Show all notes
 * @apiName getNotes
 * @apiGroup Note
 * @apiSuccess {Number} _id id of the Note.
 * @apiSuccess {Number} note value of the Note.
 * @apiSuccess {Object} Movie movie associated with the Note.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *      {
 *          "id": 1,
 *          "note": 5,
 *          "createdAt": "2020-03-19T09:39:35.000Z",
 *          "updatedAt": "2020-03-19T09:43:59.000Z",
 *          "Movie": {
 *              "id": 1,
 *              "title": "Arrival"
 *          }
 *      },
 *      {
 *          "id": 2,
 *          "note": 1,
 *          "createdAt": "2020-03-19T09:47:30.000Z",
 *          "updatedAt": "2020-03-19T09:47:30.000Z",
 *          "Movie": {
 *              "id": 2,
 *              "title": "Star Wars IX : The Rise of Skywalker"
 *          }
 *      },
 *     ]
 */
exports.note_list = (req,res,next)=>{
    Note.findAll({
        attributes: ['id', 'note', 'createdAt', 'updatedAt'],
        include: [
            {
                model: Movie,
                attributes: ['id','title']
            }
        ],
        order: [['note', 'DESC']]
    })
    .then(notes => {
        res.json(notes);
    })
    .catch(error=>{
        res.status(400);
        res.json({message : 'No note has been found here'});
        console.log(error);
    })
}

/**
 *  * @api {get} /notes/:id Show detail of a note
 * @apiName getNotesDetail
 * @apiGroup Note
 * 
 * @apiParam {Number} id of the Note
 * 
 * @apiSuccess {Number} _id id of the Note.
 * @apiSuccess {Number} note value of the Note.
 * @apiSuccess {Object} Movie movie associated with the Note.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *      {
 *          "id": 1,
 *          "note": 5,
 *          "createdAt": "2020-03-19T09:39:35.000Z",
 *          "updatedAt": "2020-03-19T09:43:59.000Z",
 *          "Movie": {
 *              "id": 1,
 *              "title": "Arrival"
 *          }
 *      }
 *     ]
 */
exports.note_detail = (req,res,next) => {
    const id = req.params.id
    Note.findByPk(id, {
        attributes: ['id','note', 'createdAt', 'updatedAt'],
        include: [
            {
                model: Movie,
                attributes: ['id','title']
            }
        ]
    })
    .then(note => {
        res.json(note);
    })
    .catch(error=>{
        res.status(400);
        res.json({message : 'No note was found'});
    })
}

/**
 * @api {post} /notes/add Add a note
 * @apiName addNote
 * @apiGroup Note
 * 
 * @apiParam {Number} note value of the Note.
 * @apiParam {Number} MovieId movie associated with the Note.
 * @apiParamExample {json} Request-Example:
 *      {
 *          "note": 3,
 *          "MovieId": 2
 *      }
 * 
 * @apiSuccess {Number} _id id of the Note.
 * @apiSuccess {Number} note value of the Note.
 * @apiSuccess {Number} MovieId movie associated with the Note.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *          "id": 6,
 *          "note": 3,
 *          "MovieId": 2,
 *          "updatedAt": "2020-03-19T18:42:23.171Z",
 *          "createdAt": "2020-03-19T18:42:23.171Z"
 *     }
 */
exports.note_add = (req,res,next) => {
    Note.create(req.body)
    .then(note => {
        res.json(note);
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}

/**
 * @api {put} /notes/:id Edit a note
 * @apiName editNote
 * @apiGroup Note
 * 
 * @apiParam {Number} id id of the Note.
 * 
 * @apiParam {Number} note value of the Note.
 * @apiParam {Number} MovieId movie associated with the Note.
 * @apiParamExample {json} Request-Example:
 *      {
 *          "note": 3,
 *          "MovieId": 2
 *      }
 * @apiSuccess {String} message Note updated.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *          "message": "Note 6 has been updated"
 *     }
 */
exports.note_edit = (req,res,next) => {
    const id = req.params.id;
    Note.update(req.body, {
        where: {
          id: id
        }
    })
    .then(note => {
        res.json({message: `Note ${id} has been updated`});
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}

/**
 * @api {delete} /notes/:id Delete a note
 * @apiName deleteNote
 * @apiGroup Note
 * 
 * @apiParam {Number} id id of the Note.
 * 
 * @apiSuccess {String} message Note deleted.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *          "message": "Note 6 has been deleted"
 *     }
 */
exports.note_delete = (req,res,next) => {
    const id = req.params.id;
    Note.destroy({
        where: {
          id: id
        }
    })
    .then(note => {
        res.json({message: `Note ${id} has been deleted`});
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}


