const mongoose = require('mongoose');
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

const connectDB = async () => {
    try{
        const uri = process.env.MONGO_URI;
        await mongoose.connect(uri,clientOptions);
        await mongoose.connection.db.admin().command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    }
    catch(err){
        console.error("Not Connected", err.message);
    }
}

module.exports=connectDB;

