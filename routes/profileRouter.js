const express= require('express');
const profilerouter = express.Router();
const {addProfileDetails} = require('../controllers/profileController');


profilerouter.post('/addProfile',addProfileDetails);

module.exports= profilerouter;