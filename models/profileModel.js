const mongoose = require("mongoose");

const { Schema }=  mongoose;

const profileSchema = new Schema({
    profileImg:{
        type:String,
        required:true
    },
    experience:{
        type:String,
        required:true,
    },
    githubProfile:{
        type:String,
        required:true,
    },
    linkedinProfile:{
        type:String,
        required:true,
    },
    codingPlatform:{
        type:[String],
        required:true,
    },
     skills:{
        type:[String],
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
    achievements:{
        type:String,
        required:true,
    }

},{
    timestamps: true
})

module.exports = mongoose.model("Profile",profileSchema);

//User - Bio
// Skills - []
//Github 
//Linkedin
//coding Platform
//location
//certifications
//experience
