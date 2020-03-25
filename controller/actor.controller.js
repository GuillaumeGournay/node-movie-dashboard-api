const Actor = require('../models/').Actor;
const Gender = require('../models/').Gender;
const Country = require('../models/').Country;
const Movie = require('../models/').Movie;

/**
 * @api {get} /actors Show all actors
 * @apiName getActors
 * @apiGroup Actor
 * @apiSuccess {Number} _id id of the Actor.
 * @apiSuccess {String} firstname firstname of the Actor.
 * @apiSuccess {String} lastname lastname of the Actor.
 * @apiSuccess {Number} birthdate birthdate of the Actor.
 * @apiSuccess {Object} Country foreign key for the country of the Actor.
 * @apiSuccess {Object} Gender foreign key for the gender of the Actor.
 * @apiSuccess {Object} Movies foreign key for the movie(s) of the Actor.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     [{
 *          "id": 5,
 *          "firstname": "Amy",
 *          "lastname": "Adams",
 *          "birthdate": "1974-08-20",
 *          "createdAt": "2020-03-19T09:33:49.000Z",
 *          "updatedAt": "2020-03-19T09:33:49.000Z",
 *          "Country": {
 *              "id": 1,
 *              "name": "USA"
 *          },
 *          "Gender": {
 *              "id": 2,
 *              "gender": "female"
 *          },
 *          "Movies": [
 *              {
 *                  "id": 1,
 *                  "title": "Arrival",
 *                  "year": 2016,
 *                  "MovieActor": {
 *                      "createdAt": "2020-03-19T09:37:24.000Z",
 *                      "updatedAt": "2020-03-19T09:37:24.000Z",
 *                      "ActorId": 5,
 *                      "MovieId": 1
 *                  }
 *              }
 *          ]
 *     }]
 * 
 */
exports.actor_list = (req,res,next)=>{
    Actor.findAll({
        attributes: ['id','firstname','lastname','birthdate','createdAt','updatedAt'],
        include : [ //Show the association
            { 
                model: Country, 
                attributes: ['id','name']
            },
            { 
                model: Gender, 
                attributes: ['id','gender']
            },
            {
                model: Movie,
                attributes: ['id','title','year']
            }   
        ],
        order: [['lastname', 'ASC']]
    })
    .then(actors => {
        res.json(actors);
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}

/**
 * @api {get} /actors/:id Show details of an actor
 * @apiPermission The user has to be logged in to access this route
 * @apiName getActorsDetail
 * @apiGroup Actor
 * 
 * @apiParam {Number} id of the Actor
 * 
 * @apiSuccess {Number} _id id of the Actor.
 * @apiSuccess {String} firstname firstname of the Actor.
 * @apiSuccess {String} lastname lastname of the Actor.
 * @apiSuccess {Number} birthdate birthdate of the Actor.
 * @apiSuccess {Object} Country foreign key for the country of the Actor.
 * @apiSuccess {Object} Gender foreign key for the gender of the Actor.
 * @apiSuccess {Object} Movies foreign key for the movie(s) of the Actor.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     [{
 *          "id": 5,
 *          "firstname": "Amy",
 *          "lastname": "Adams",
 *          "birthdate": "1974-08-20",
 *          "createdAt": "2020-03-19T09:33:49.000Z",
 *          "updatedAt": "2020-03-19T09:33:49.000Z",
 *          "Country": {
 *              "id": 1,
 *              "name": "USA"
 *          },
 *          "Gender": {
 *              "id": 2,
 *              "gender": "female"
 *          },
 *          "Movies": [
 *              {
 *                  "id": 1,
 *                  "title": "Arrival",
 *                  "year": 2016,
 *                  "MovieActor": {
 *                      "createdAt": "2020-03-19T09:37:24.000Z",
 *                      "updatedAt": "2020-03-19T09:37:24.000Z",
 *                      "ActorId": 5,
 *                      "MovieId": 1
 *                  }
 *              }
 *          ]
 *     }]
 * 
 * @apiError {String} message Access denied
 * @apiErrorExample {json} Error-Response:
 *      HTTP/1.1 401 Unauthorized
 *      {
 *          "message": "You must be logged in to access this page"
 *      }
 */
exports.actor_detail = (req,res,next) => {
    const id = req.params.id
    Actor.findByPk(id, {
        attributes: ['id','firstname','lastname','birthdate', 'createdAt', 'updatedAt'],
        include : [ //Show the association
            { model: Country, attributes: ['id','name']},
            { model: Gender, attributes: ['id','gender']},
            {
                model: Movie,
                attributes: ['id','title','year']
            }   
        ]
    })
    .then(actor => {
        res.json(actor);
    })
    .catch(error=>{
        res.status(400);
        res.json({message : 'No actor was found'});
    })
}

/**
 * @api {post} /actors/add Add an actor
 * @apiPermission The user has to be logged in to access this route
 * @apiName addActor
 * @apiGroup Actor
 * 
 * @apiParam {String} firstname firstname of the Actor.
 * @apiParam {String} lastname lastname of the Actor.
 * @apiParam {String} birthdate birthdate of the Actor (YYYY-MM-DD).
 * @apiParam {Number} CountryId country of the Actor.
 * @apiParam {Number} GenderId gender of the Actor.
 * @apiParamExample {json} Request-Example:
 *      {
 *          "firstname": "Jeremy",
 *          "lastname": "Renner",
 *          "birthdate": "1971-01-07",
 *          "CountryId" : 1,
 *          "GenderId": 1
 *      }
 * 
 * @apiSuccess {Number} _id id of the Actor.
 * @apiSuccess {String} firstname firstname of the Actor.
 * @apiSuccess {String} lastname lastname of the Actor.
 * @apiSuccess {String} birthdate birthdate of the Actor.
 * @apiSuccess {Number} CountryId country of the Actor.
 * @apiSuccess {Number} GenderId gender of the Actor.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *          "id": 6,
 *          "firstname": "Jeremy",
 *          "lastname": "Renner",
 *          "birthdate": "1971-01-07",
 *          "CountryId": 1,
 *          "GenderId": 1,
 *          "updatedAt": "2020-03-19T17:43:42.369Z",
 *          "createdAt": "2020-03-19T17:43:42.369Z"
 *     }
 * 
 * @apiError {String} message Access denied
 * @apiErrorExample {json} Error-Response:
 *      HTTP/1.1 401 Unauthorized
 *      {
 *          "message": "You must be logged in to access this page"
 *      }
 */
exports.actor_add = (req,res,next) => {
    Actor.create(req.body)
    .then(actor => {
        res.json(actor);
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}

/**
 * @api {put} /actors/:id Edit an actor
 * @apiPermission The user has to be logged in to access this route
 * @apiName editActor
 * @apiGroup Actor
 * 
 * @apiParam {Number} id id of the Actor.
 * 
 * @apiParam {String} [firstname] firstname of the Actor.
 * @apiParam {String} [lastname] lastname of the Actor.
 * @apiParam {String} [birthdate] birthdate of the Actor.
 * @apiParam {Number} [CountryId] country of the Actor.
 * @apiParam {Number} [GenderId] gender of the Actor.
 * @apiParamExample {json} Request-Example:
 *     {
 *          "name": "Jane",
 *          "GenderId": 2
 *     }
 * 
 * @apiSuccess {String} message Actor updated.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *          "message": "Actor 6 has been updated"
 *     }
 * 
 * @apiError {String} message Access denied
 * @apiErrorExample {json} Error-Response:
 *      HTTP/1.1 401 Unauthorized
 *      {
 *          "message": "You must be logged in to access this page"
 *      }
 */
exports.actor_edit = (req,res,next) => {
    const id = req.params.id;
    Actor.update(req.body, {
        where: {
          id: id
        }
    })
    .then(actor => {
        res.json({message: `Actor ${id} has been updated`});
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}

/**
 * @api {delete} /actors/:id Delete an actor
 * @apiPermission The user has to be logged in to access this route
 * @apiName deleteActor
 * @apiGroup Actor
 * 
 * @apiParam {Number} id id of the Actor.
 * 
 * @apiSuccess {String} message Actor deleted.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       message: "Actor 6 has been deleted"
 *     }
 * 
 * @apiError {String} message Access denied
 * @apiErrorExample {json} Error-Response:
 *      HTTP/1.1 401 Unauthorized
 *      {
 *          "message": "You must be logged in to access this page"
 *      }
 */
exports.actor_delete = (req,res,next) => {
    const id = req.params.id;
    Actor.destroy({
        where: {
          id: id
        }
    })
    .then(actor => {
        res.json({message: `Actor ${id} has been deleted`});
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}


