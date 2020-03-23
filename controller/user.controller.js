const User = require('../models/').User;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

/**
 * @api {get} /users Show all users
 * @apiName getUsers
 * @apiGroup User
 * @apiSuccess {Number} _id id of the User.
 * @apiSuccess {String} email email of the User.
 * @apiSuccess {String} password hashed password of the User.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *      {
 *        "id": 1,
 *        "email": "john.doe@gmail.com",
 *        "password": "$2b$10$7kxlv4BAXsKuqnEu4GVGqOdQ0KHDO2nXlGuiKKdvNj9feSnipyh4e",
 *        "createdAt": "2020-03-19T10:03:44.000Z",
 *        "updatedAt": "2020-03-19T10:03:44.000Z"
 *      },
 *      {
 *        "id": 2,
 *        "email": "jane.doe@gmail.com",
 *        "password": "$2b$10$oDtGs.Bzx/mvHpu4lG.JXOdFhLsW/jiSOtrIuRQZ3XrfjbdCSMCK.",
 *        "createdAt": "2020-03-19T10:04:06.000Z",
 *        "updatedAt": "2020-03-19T10:04:06.000Z"
 *      }
 *     ]
 */
exports.user_list = (req,res,next)=>{
    User.findAll({})
    .then(users => {
        res.json(users);
    })
    .catch(error=>{
        res.status(400);
        res.json({message : 'No user was found here'});
    })
}

/**
 * @api {get} /users/:id Show detail of a user
 * @apiName getUsersDetail
 * @apiGroup User
 * 
 * @apiParam {Number} id of the User
 * 
 * @apiSuccess {Number} _id id of the User.
 * @apiSuccess {String} email email of the User.
 * @apiSuccess {String} password hashed password of the User.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *      {
 *        "id": 1,
 *        "email": "john.doe@gmail.com",
 *        "password": "$2b$10$7kxlv4BAXsKuqnEu4GVGqOdQ0KHDO2nXlGuiKKdvNj9feSnipyh4e",
 *        "createdAt": "2020-03-19T10:03:44.000Z",
 *        "updatedAt": "2020-03-19T10:03:44.000Z"
 *      }
 *     ]
 */
exports.user_detail = (req,res,next)=>{
    const id = req.params.id
    User.findByPk(id)
    .then(user => {
        res.json(user);
    })
    .catch(error=>{
        res.status(400);
        res.json({message : 'No user was found here'});
    })
}

/**
 * @api {post} /users/signin User signin
 * @apiName addUser
 * @apiGroup User
 * 
 * @apiParam {String} email email of the User.
 * @apiParam {String} password password of the User.
 * @apiParamExample {json} Request-Example:
 *     {
 *       "email": "john.doe@gmail.com",
 *       "password": "1234",
 *     }
 * 
 * @apiSuccess {Number} _id id of the User.
 * @apiSuccess {String} email email of the User.
 * @apiSuccess {String} password hashed password of the User.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *      {
 *        "id": 1,
 *        "email": "john.doe@gmail.com",
 *        "password": "$2b$10$7kxlv4BAXsKuqnEu4GVGqOdQ0KHDO2nXlGuiKKdvNj9feSnipyh4e",
 *        "createdAt": "2020-03-19T10:03:44.000Z",
 *        "updatedAt": "2020-03-19T10:03:44.000Z"
 *      }
 *     ]
 * 
 * @apiError {String} message email already used
 * @apiErrorExample {json} Error-Response:
 *      {
 *          "message": "This email is already used"
 *      }
 */
exports.user_signin = async(req, res, next) => {
    try {
        // Test is the user already exist
        const testUser = await User.findAll({
            where: {
                email: req.body.email
            }
        });
        if(testUser.length !== 0) {
            return res.status(409).json({ message: 'This email is already used' });
        }
        // Creating a new user
        const hashPassword = await bcrypt.hash(req.body.password, 10)
        const newUser = Object.assign(req.body, {
            email: req.body.email,
            password: hashPassword
        })
        const createUser = await User.create(newUser)
        res.status(200);
        res.json(createUser);
    }
    catch(error) {
        res.status(400);
        res.json(error);
    }
}

/**
 * @api {put} /users/edit/:id Edit a user
 * @apiName editUser
 * @apiGroup User
 * 
 * @apiParam {Number} id id of the User.
 * 
 * @apiParam {String} [email] email of the User.
 * @apiParam {String} [password] password of the User.
 * @apiParamExample {json} Request-Example:
 *     {
 *       "email": "john.doe@gmail.com",
 *       "password": "1234",
 *     }
 * 
 * @apiSuccess {String} message user updated.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *          "message": "User 6 has been updated"
 *     }
 */
exports.user_edit = (req,res,next) => {
    const id = req.params.id;
    User.update(req.body, {
        where: {
          id: id
        }
    })
    .then(user => {
        res.json({message: `User ${id} has been updated`});
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}

/**
 * @api {delete} /users/delete/:id Delete a user
 * @apiName deleteUser
 * @apiGroup User
 * 
 * @apiParam {Number} id id of the User.
 * 
 * @apiSuccess {String} message User deleted.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *          "message": "User 6 has been deleted"
 *     }
 */
exports.user_delete = (req,res,next) => {
    const id = req.params.id;
    User.destroy({
        where: {
          id: id
        }
    })
    .then(user => {
        res.json({message: `User ${id} has been deleted`});
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}

/**
 * @api {post} /users/login User login
 * @apiName loginUser
 * @apiGroup User
 * 
 * @apiParam {String} email email of the User.
 * @apiParam {String} password password of the User.
 * @apiParamExample {json} Request-Example:
 *     {
 *       "email": "john.doe@gmail.com",
 *       "password": "1234",
 *     }
 * 
 * @apiSuccess {String} message validation message
 * @apiSuccess {Object} user informations of the user
 * @apiSuccess {Number} _id id of the User.
 * @apiSuccess {String} email email of the User.
 * @apiSuccess {String} password hashed password of the User.
 * @apiSuccess {String} token token 
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *      {
 *        "message": "Authentication succeded",
 *        "user": {
 *            "id": 1,
 *            "email": "john.doe@gmail.com",
 *            "password": "$2b$10$7kxlv4BAXsKuqnEu4GVGqOdQ0KHDO2nXlGuiKKdvNj9feSnipyh4e",
 *            "createdAt": "2020-03-19T10:03:44.000Z",
 *            "updatedAt": "2020-03-19T10:03:44.000Z"
 *        },
 *        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG4uZG9lQGdtYWlsLmNvbSIsImlhdCI6MTU4NDY1MTE0MCwiZXhwIjoxNTg0Njc5OTQwfQ.G1XJOS7W_r-JMOGCzE_joWDKysiYXSWIXL_qSus6mIQ"
 *      }
 * 
 * @apiError {String} message Authentication failed
 * @apiErrorExample {json} Error-Response:
 *      {
 *          "message": "Authentication failed"
 *      }
 */  
exports.user_login = (req,res, next) => {
    User.findOne({ where: { email: req.body.email } })
    .then(user => {
      if(user){
        verifyPassword(user,req,res);
      }
      else{
        res.json({message : "Wrong email ou password"})
      }
    })
    .catch(error => {
      res.status(500).json(error);
    })
  }
  
const verifyPassword = (user,req,res) => {
    bcrypt.compare(req.body.password, user.password,(err, result) =>{
      if(err) return res.status(500).json(err)
      else {
        if(result) return getToken(user, res)
        else return res.json({message: "Authentication failed"});
      }
    })
  }
  
  const getToken = (user,res) => {
    const token = jwt.sign({ email: user.email, userId: user._id},process.env.JWT_KEY, {expiresIn:"8h"})
    res.json({
      message: "Authentication succeded",
      user: user,
      token: token
    })
  }

