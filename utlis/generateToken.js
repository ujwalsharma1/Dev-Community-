const jwt = require("jsonwebtoken");


const generateToken = (userId) =>{
    return jwt.sign({_id: userId}, process.env.JWT_KEY);

}

module.exports = generateToken;