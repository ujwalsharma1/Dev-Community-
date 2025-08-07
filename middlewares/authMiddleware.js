const jwt = require('jsonwebtoken');

const authMiddleware = async(req,res,next)=>{
    const { authorization } = req.headers;
    const token = authorization.split(" ")[1];

    const tokenObj = await jwt.verify(token,process.env.JWT_KEY);
    if(!tokenObj) return res.status(404).send("Wrong Token");

    
    next();
}


module.exports = { authMiddleware};