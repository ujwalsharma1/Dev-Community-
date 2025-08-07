const express = require('express');

const dotenv=require('dotenv')
dotenv.config()


const app = express();
const PORT=process.env.PORT || 5000;

const connectDB=require('./config');
const userRoutes=require('./routes/userRoutes');
const profilerouter = require('./routes/profileRouter');


app.use(express.json());

connectDB();

app.use('/user',userRoutes);
app.use("/profile",profilerouter);


app.use("/", function (req,res){
  res.status(500).json({message:"Something Happened"});
})

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})