const jwt = require('jsonwebtoken');
const UserModel = require('../models/user.model');


module.exports.checkUser =  (req, res, next) => {
    const token = req.cookies.jwt;
    
    if(token) {
        jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
            if(err) {
               res.locals.user = null;
               res.cookies('jwt', '', { maxAge: 1 });
                return next();
            }else {
                let user = await UserModel.findById(decodedToken._id);
                res.locals.user = user;
                console.log(res.locals.user);
                return next();
            }
        } );
    }else {
        res.locals.user = null;
        return next();

    }
}



module.exports.requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token ){
        jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
            if(err) {
                console.log(err);
            }else {
                console.log(decodedToken.id);
                next();
            }
        } );
    }else {
       console.log('no token');
    }
}