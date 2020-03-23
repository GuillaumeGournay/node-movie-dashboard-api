const Gender = require('../models/').Gender;

/**
 * @api {get} /genders Show all genders
 * @apiName getGenders
 * @apiGroup Gender
 * @apiSuccess {String} _id id of the Gender.
 * @apiSuccess {String} gender value of the Gender.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *      {
 *          "id": 1,
 *          "gender": "female",
 *          "createdAt": "2020-03-19T09:30:19.000Z",
 *          "updatedAt": "2020-03-19T09:30:19.000Z"
 *      },
 *      {
 *          "id": 2,
 *          "gender": "male",
 *          "createdAt": "2020-03-19T09:30:26.000Z",
 *          "updatedAt": "2020-03-19T09:30:26.000Z"
 *      }
 *     ]
 */
exports.gender_list = (req,res,next)=>{
    Gender.findAll({})
    .then(genders => {
        res.json(genders);
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}

/**
 *  * @api {get} /genders/:id Show detail of a gender
 * @apiName getGendersDetail
 * @apiGroup Gender
 * 
 * @apiParam {Number} id of the Gender
 * 
 * @apiSuccess {String} _id id of the Gender.
 * @apiSuccess {String} gender value of the Gender.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": 1,
 *       "gender": "female"
 *     }
 */
exports.gender_detail = (req,res,next)=>{
    const id = req.params.id
    Gender.findByPk(id)
    .then(gender => {
        res.json(gender);
    })
    .catch(error=>{
        res.status(400);
        res.json({message : 'il y a rien la'});
    })
}

/**
 * @api {post} /genders/add Add a gender
 * @apiName addGender
 * @apiGroup Gender
 * 
 * @apiParam {String} gender value of the Gender.
 * @apiParamExample {json} Request-Example:
*     {
*       "gender": "female"
*     }
 * 
 * @apiSuccess {Number} _id id of the Gender.
 * @apiSuccess {String} gender value of the Gender.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": 1,
 *       "gender": "female",
 *       "updatedAt": "2020-03-17T15:26:58.984Z",
 *       "createdAt": "2020-03-17T15:26:58.984Z"
 *     }
 */
exports.gender_add = (req,res,next) => {
    Gender.create(req.body)
    .then(gender => {
        res.json(gender);
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}

/**
 * @api {put} /genders/:id Edit a gender
 * @apiName editGender
 * @apiGroup Gender
 * 
 * @apiParam {Number} id id of the Gender.
 * @apiParam {String} gender value of the Gender.
 * @apiParamExample {json} Request-Example:
*     {
*       "gender": "male"
*     }
 * 
 * @apiSuccess {String} message Gender updated.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *          "message": "Gender 1 has been updated"
 *     }
 */
exports.gender_edit = (req,res,next) => {
    const id = req.params.id;
    Gender.update(req.body, {
        where: {
          id: id
        }
    })
    .then(gender => {
        res.json({message: `Gender ${id} has been updated`});
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}

/**
 * @api {delete} /genders/:id Delete a gender
 * @apiName deleteGender
 * @apiGroup Gender
 * 
 * @apiParam {Number} id id of the Gender.
 * 
 * @apiSuccess {String} message Gender deleted.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *          "message": "Gender 1 has been deleted"
 *     }
 */
exports.gender_delete = (req,res,next) => {
    const id = req.params.id;
    Gender.destroy({
        where: {
          id: id
        }
    })
    .then(gender => {
        res.json({message: `Gender ${id} has been deleted`});
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}


