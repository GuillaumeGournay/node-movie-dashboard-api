const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try{
        //console.log(req.body)
        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_KEY);
        res.userData = decoded;
        next();
    }
    catch(error){
        res.status(401).json({ message: "You must be logged in to access this page"});
    }
}