const Category = require('../models/').Category;

/**
 * @api {get} /categories Show all categories
 * @apiName getCategories
 * @apiGroup Category
 * @apiSuccess {Number} _id id of the Category.
 * @apiSuccess {String} name name of the Category.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *      {
 *          "id": 1,
 *          "name": "Thriller",
 *          "createdAt": "2020-03-19T09:30:19.000Z",
 *          "updatedAt": "2020-03-19T09:30:19.000Z"
 *      },
 *      {
 *          "id": 2,
 *          "name": "Drama",
 *          "createdAt": "2020-03-19T09:30:26.000Z",
 *          "updatedAt": "2020-03-19T09:30:26.000Z"
 *      }
 *     ]
 */
exports.category_list = (req,res,next)=>{
    Category.findAll({})
    .then(categories => {
        res.json(categories);
    })
    .catch(error=>{
        res.status(400);
        res.json({message : 'No category has been found here'});
    })
}

/**
 * @api {get} /categories/:id Show detail of a category
 * @apiName getCategoriesDetail
 * @apiGroup Category
 * 
 * @apiParam {Number} id of the Category
 * 
 * @apiSuccess {Number} _id id of the Category.
 * @apiSuccess {String} name name of the Category.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *          "id": 1,
 *          "name": "Thriller",
 *          "createdAt": "2020-03-19T09:30:19.000Z",
 *          "updatedAt": "2020-03-19T09:30:19.000Z"
 *     }
 */
exports.category_detail = (req,res,next)=>{
    const id = req.params.id
    Category.findByPk(id)
    .then(category => {
        res.json(category);
    })
    .catch(error=>{
        res.status(400);
        res.json({message : 'No category has been found here'});
    })
}

/**
 * @api {post} /categories/add Add a category
 * @apiName addCategory
 * @apiGroup Category
 * 
 * @apiParam {String} name name of the Category.
 * @apiParamExample {json} Request-Example:
*     {
*       "name": "Romance"
*     }
 * 
 * @apiSuccess {Number} _id id of the Category.
 * @apiSuccess {String} name name of the Category.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": 2,
 *       "name": "Romance",
 *       "updatedAt": "2020-03-17T15:26:58.984Z",
 *       "createdAt": "2020-03-17T15:26:58.984Z"
 *     }
 */
exports.category_add = (req,res,next) => {
    Category.create(req.body)
    .then(category => {
        res.json(category);
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}

/**
 * @api {put} /categories/:id Edit a category
 * @apiName editCategory
 * @apiGroup Category
 * 
 * @apiParam {Number} id id of the Category.
 * @apiParam {String} name name of the Category.
 * @apiParamExample {json} Request-Example:
*     {
*       "name": "Science Fiction"
*     }
 * @apiSuccess {String} message Category updated.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *          "message": "Category 6 has been updated"
 *     }
 */
exports.category_edit = (req,res,next) => {
    const id = req.params.id;
    Category.update(req.body, {
        where: {
          id: id
        }
    })
    .then(category => {
        res.json({message: `Category ${id} has been updated`});
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}

/**
 * @api {delete} /categories/:id Delete a category
 * @apiName deleteCategory
 * @apiGroup Category
 * 
 * @apiParam {Number} id id of the Category.
 * 
 * @apiSuccess {String} message Category deleted.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       message: "Category 6 has been deleted"
 *     }
 */
exports.category_delete = (req,res,next) => {
    const id = req.params.id;
    Category.destroy({
        where: {
          id: id
        }
    })
    .then(category => {
        res.json({message: `Category ${id} has been deleted`});
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}


