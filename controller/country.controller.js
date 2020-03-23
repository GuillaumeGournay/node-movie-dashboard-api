const Country = require('../models/').Country;

/**
 * @api {get} /countries Show all countries
 * @apiName getCountries
 * @apiGroup Country
 * @apiSuccess {String} _id id of the Country.
 * @apiSuccess {String} name name of the Country.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *      {
 *          "id": 1,
 *          "name": "USA",
 *          "createdAt": "2020-03-19T09:30:19.000Z",
 *          "updatedAt": "2020-03-19T09:30:19.000Z"
 *      },
 *      {
 *          "id": 2,
 *          "name": "France",
 *          "createdAt": "2020-03-19T09:30:26.000Z",
 *          "updatedAt": "2020-03-19T09:30:26.000Z"
 *      }
 *     ]
 */
exports.country_list = (req,res,next)=>{
    Country.findAll({})
    .then(countries => {
        res.json(countries);
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}

/**
 *  * @api {get} /countries/:id Show detail of a country
 * @apiName getCountriesDetail
 * @apiGroup Country
 * 
 * @apiParam {Number} id of the Country
 * 
 * @apiSuccess {String} _id id of the Country.
 * @apiSuccess {String} name name of the Country.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *          "id": 1,
 *          "name": "USA",
 *          "createdAt": "2020-03-19T09:30:19.000Z",
 *          "updatedAt": "2020-03-19T09:30:19.000Z"
 *     }
 */
exports.country_detail = (req,res,next)=>{
    const id = req.params.id
    Country.findByPk(id)
    .then(country => {
        res.json(country);
    })
    .catch(error=>{
        res.status(400);
        res.json({message : 'il y a rien la'});
    })
}

/**
 * @api {post} /countries/add Add a country
 * @apiName addCountry
 * @apiGroup Country
 * 
 * @apiParam {String} name name of the Country.
 * @apiParamExample {json} Request-Example:
*     {
*       "name": "Germany"
*     }
 * 
 * @apiSuccess {String} _id id of the Country.
 * @apiSuccess {String} name name of the Country.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": 1,
 *       "name": "Germany",
 *       "updatedAt": "2020-03-17T15:26:58.984Z",
 *       "createdAt": "2020-03-17T15:26:58.984Z"
 *     }
 */
exports.country_add = (req,res,next) => {
    Country.create(req.body)
    .then(country => {
        res.json(country);
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}

/**
 * @api {put} /countries/:id Edit a country
 * @apiName editCountry
 * @apiGroup Country
 * 
 * @apiParam {Number} id id of the Country.
 * 
 * @apiParam {String} name name of the Country.
 * @apiParamExample {json} Request-Example:
*     {
*       "name": "Sweden"
*     }
 * 
 * @apiSuccess {String} message Country updated.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *          "message": "Country 1 has been updated"
 *     }
 */
exports.country_edit = (req,res,next) => {
    const id = req.params.id;
    Country.update(req.body, {
        where: {
          id: id
        }
    })
    .then(country => {
        res.json({message: `Country ${id} has been updated`});
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}

/**
 * @api {delete} /countries/:id Delete a country
 * @apiName deleteCountry
 * @apiGroup Country
 * 
 * @apiParam {Number} id id of the Country.
 * 
 * @apiSuccess {String} message Country deleted.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *          "message": "Country 1 has been deleted"
 *     }
 */
exports.country_delete = (req,res,next) => {
    const id = req.params.id;
    Country.destroy({
        where: {
          id: id
        }
    })
    .then(country => {
        res.json({message: `Country ${id} has been deleted`});
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}


