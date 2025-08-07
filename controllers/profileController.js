const Profile = require('../models/profileModel');


const addProfileDetails = async(req,res,)=>{
    const {profileImg,experience,githubProfile,linkedinProfile,codingPlatform,skills,location,achievements}=req.body;

    //validation 

    if(!profileImg || !experience || !githubProfile || !linkedinProfile || !codingPlatform || 
        !skills || !location || !achievements){
            return res.status(400).send({message:"Fill all fields"});
        }

    try{
        const newprofile = await new Profile({profileImg,experience,githubProfile,linkedinProfile,codingPlatform,skills,location,achievements});
        await newprofile.save();
        res.status(200).send({message:"Profile details added"});
    }
    catch(err){
        res.status(500).send({message:err.message});
    }
};

//const updateProfileDetails = async(req,res)=> {



//}

module.exports = {addProfileDetails};