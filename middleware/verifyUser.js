const jwt = require('jsonwebtoken');

const verifyUser = (req, res, next) => {
    const token = req.headers.authorization;
    if(token){
        jwt.verify(token, process.env.ACCESS_TOKEN, (err, user) => {
            if(err){
                return res.status(403).json("Token is not valid!");
            }
            req.user = user;
            next();
        });
    }
}

module.exports = verifyUser;