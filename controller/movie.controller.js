const Movie = require('../models/').Movie;
const Category = require('../models/').Category;
const Actor = require('../models/').Actor;
const MovieActor = require('../models/').MovieActor;
const Note = require('../models/').Note;

/**
 * @api {get} /movies Show all movies
 * @apiName getMovies
 * @apiGroup Movie
 * @apiSuccess {Number} _id id of the Movie.
 * @apiSuccess {String} title title of the Movie.
 * @apiSuccess {Number} year release of the Movie.
 * @apiSuccess {String} picture poster of the Movie.
 * @apiSuccess {String} synopsis synopsis of the Movie.
 * @apiSuccess {String} director director of the Movie.
 * @apiSuccess {Number} Category category associated with the Movie.
 * @apiSuccess {Number} Actors actor(s) associated with the Movie.
 * @apiSuccess {Number} Notes note(s) associated with the Movie.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *      [
 *          {
 *              "id": 1,
 *              "title": "Arrival",
 *              "year": 2016,
 *              "picture": "Arrival picture",
 *              "synopsis": "A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world.",
 *              "director": "Denis Villeneuve",
 *              "createdAt": "2020-03-19T09:34:59.000Z",
 *              "updatedAt": "2020-03-19T09:34:59.000Z",
 *              "Category": {
 *                  "id": 6,
 *                  "name": "Science Fiction"
 *              },
 *              "Actors": [
 *                  {
 *                      "id": 5,
 *                      "firstname": "Amy",
 *                      "lastname": "Adams",
 *                      "MovieActor": {
 *                          "createdAt": "2020-03-19T09:37:24.000Z",
 *                          "updatedAt": "2020-03-19T09:37:24.000Z",
 *                          "ActorId": 5,
 *                          "MovieId": 1
 *                      }
 *                  }
 *              ],
 *              "Notes": [
 *                  {
 *                      "note": 5
 *                  },
 *                  {
 *                      "note": 5
 *                  },
 *              ]
 *      ]
 */
exports.movie_list = (req,res,next)=>{
    Movie.findAll({
        attributes: ['id','title','year','picture','synopsis','director', 'createdAt', 'updatedAt'],
        include: [
            {
                model: Category,
                attributes: ['id','name']
            },
            {
                model: Actor,
                attributes: ['id','firstname','lastname']
            },
            {
                model: Note,
                attributes: ['note']
            }
        ],
        order: [['title', 'ASC']]
    })
    .then(movies => {
        res.json(movies);
    })
    .catch(error=>{
        res.status(400);
        res.json({message : 'No movie has been found here'});
        console.log(error);
    })
}

/**
 * @api {get} /movies/:id Show detail of a movie
 * @apiName getMoviesDetail
 * @apiGroup Movie
 * 
 * @apiParam {Number} id of the Movie
 * 
 * @apiSuccess {Number} _id id of the Movie.
 * @apiSuccess {String} title title of the Movie.
 * @apiSuccess {Number} year release of the Movie.
 * @apiSuccess {String} picture poster of the Movie.
 * @apiSuccess {String} synopsis synopsis of the Movie.
 * @apiSuccess {String} director director of the Movie.
 * @apiSuccess {Number} Category category associated with the Movie.
 * @apiSuccess {Number} Actors actor(s) associated with the Movie.
 * @apiSuccess {Number} Notes note(s) associated with the Movie.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *      [
 *          {
 *              "id": 1,
 *              "title": "Arrival",
 *              "year": 2016,
 *              "picture": "Arrival picture",
 *              "synopsis": "A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world.",
 *              "director": "Denis Villeneuve",
 *              "createdAt": "2020-03-19T09:34:59.000Z",
 *              "updatedAt": "2020-03-19T09:34:59.000Z",
 *              "Category": {
 *                  "id": 6,
 *                  "name": "Science Fiction"
 *              },
 *              "Actors": [
 *                  {
 *                      "id": 5,
 *                      "firstname": "Amy",
 *                      "lastname": "Adams",
 *                      "MovieActor": {
 *                          "createdAt": "2020-03-19T09:37:24.000Z",
 *                          "updatedAt": "2020-03-19T09:37:24.000Z",
 *                          "ActorId": 5,
 *                          "MovieId": 1
 *                      }
 *                  }
 *              ],
 *              "Notes": [
 *                  {
 *                      "note": 5
 *                  },
 *                  {
 *                      "note": 5
 *                  },
 *              ]
 *      ]
 */
exports.movie_detail = (req,res,next) => {
    const id = req.params.id
    Movie.findByPk(id, {
        attributes: ['id','title','year','picture','synopsis','director', 'createdAt', 'updatedAt'],
        include : [ //Show the association
            {
                model: Category,
                attributes: ['id','name']
            },
            {
                model: Actor,
                attributes: ['id','firstname','lastname']
            },
            {
                model: Note,
                attributes: ['note']
            }  
        ]
    })
    .then(movie => {
        res.json(movie);
    })
    .catch(error=>{
        res.status(400);
        res.json({message : 'No movie was found'});
    })
}

/**
 * @api {post} /movies/add Add a movie
 * @apiName addMovie
 * @apiGroup Movie
 * 
 * @apiParam {String} title title of the Movie.
 * @apiParam {Number} year release of the Movie.
 * @apiParam {String} picture poster of the Movie.
 * @apiParam {String} synopsis synopsis of the Movie.
 * @apiParam {String} director director of the Movie.
 * @apiParam {Number} CategoryId category associated with the Movie.
 * @apiParamExample {json} Request-Example:
 *      {
 *          "title": "Arrival",
 *          "year": 2016,
 *          "picture": "Arrival picture",
 *          "synopsis": "A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world.",
 *          "director": "Denis Villeneuve",
 *          "CategoryId": 2
 *      }
 * 
 * @apiSuccess {Number} _id id of the Movie.
 * @apiSuccess {String} title title of the Movie.
 * @apiSuccess {Number} year release of the Movie.
 * @apiSuccess {String} picture poster of the Movie.
 * @apiSuccess {String} synopsis synopsis of the Movie.
 * @apiSuccess {String} director director of the Movie.
 * @apiSuccess {Number} CategoryId category associated with the Movie.
 * @apiSuccessExample {json} Success-Response:
 *      {
 *          "id": 1,
 *          "title": "Arrival",
 *          "year": 2016,
 *          "picture": "Arrival picture",
 *          "synopsis": "A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world.",
 *          "director": "Denis Villeneuve",
 *          "CategoryId": 2
 *      }
 */
exports.movie_add = (req,res,next) => {
    Movie.create(req.body)
    .then(movie => {
        res.json(movie);
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}

/**
 * @api {put} /movies/edit/:id Edit a movie
 * @apiName editMovie
 * @apiGroup Movie
 * 
 * @apiParam {Number} _id id of the Movie.
 * 
 * @apiParam {String} [title] title of the Movie.
 * @apiParam {Number} [year] release of the Movie.
 * @apiParam {String} [picture] poster of the Movie.
 * @apiParam {String} [synopsis] synopsis of the Movie.
 * @apiParam {String} [director] director of the Movie.
 * @apiParam {Number} [CategoryId] category associated with the Movie.
 * @apiParamExample {json} Success-Response:
 *     {
 *          "year": 2010,
 *          "director": "Martin Scorsese",
 *     }
 * 
 * @apiSuccess {String} message Movie updated.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *          "message": "Movie 6 has been updated"
 *     }
 */
exports.movie_edit = (req,res,next) => {
    const id = req.params.id;
    Movie.update(req.body, {
        where: {
          id: id
        }
    })
    .then(movie => {
        res.json({message: `Movie ${id} has been updated`});
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}

/**
 * @api {delete} /movies/delete/:id Delete a movie
 * @apiName deleteMovie
 * @apiGroup Movie
 * 
 * @apiParam {Number} id id of the Movie.
 * 
 * @apiSuccess {String} message Movie deleted.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *          "message": "Movie 6 has been deleted"
 *     }
 */
exports.movie_delete = (req,res,next) => {
    const id = req.params.id;
    Movie.destroy({
        where: {
          id: id
        }
    })
    .then(movie => {
        res.status(200);
        res.json({message: "Movie deleted"});
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}

/**
 * @api {ActorMovie} /movies/actor/:id Add an actor to a movie
 * @apiName addActor
 * @apiGroup Movie
 * 
 * @apiParam {Number} id id of the Movie in the request.
 * 
 * @apiParam {Number} _id id of the actor in the body.
 * @apiParamExample {json} Request-Example:
 *      {
 *          "actorId": 7
 *      }
 * 
 * @apiSuccess {String} MovieId id of the movie associated with the actor.
 * @apiSuccess {Number} ActorId id of the actor associated with the movie.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       message: "Movie deleted"
 *     }
 */
exports.movie_add_actor = (req, res, next) => {
    const id = req.params.id;
    const movieActor = {"MovieId":id, "ActorId":req.body.actorId};
    MovieActor.create(movieActor)
    .then(data => {
        res.json(data);
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}



