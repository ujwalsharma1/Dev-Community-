const User = require('../models/User');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const registerUser = async (req,res) =>{
    const { firstName, lastName, emailId, password} = req.body;

    //VALIDATION
    try{
    if (!firstName || !emailId || !password){
        res.status(400).send({message:"Please Add all mandatory fields"});
    }

    //Check the user existing already in db or not
    const userExists = await User.findOne({emailId});
    if (userExists){
        return res.status(400).json({message: "Already Exist"});
    }

    //CREATE USER IN YOUR DATABASE

    const newUser = await User.create({
        firstName,
        lastName,
        emailId,
        password
    });
    
    res.status(201).json("USER CREATED",{newUser});
}
    catch(err){
        res.status(500).send({message:err.message});
    }
    
}

const loginUser = async (req,res) => {
    const {emailId,password} = req.body;

    try{
        const find= await User.findOne({emailId});
        if(!find){
            return res.status(404).send({message:"User Not Registered"});
        }
        
        const check = await bcrypt.compare(password,find.password);
        if(!check) return res.status(400).send({messge:"Wrong Password"});

        const token = jwt.sign({id:find._id}, process.env.JWT_KEY, {
            expiresIn:"1h"
        });

        res.status(200).send({token,message:"Login Successfully"});
    }
    catch(err){
        res.status(500).send({message:err.message});
    }

}

module.exports = { registerUser , loginUser};