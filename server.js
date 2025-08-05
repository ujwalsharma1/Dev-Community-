const express = require('express');
const app = express();
const dotenv=require('dotenv')
dotenv.config()
const PORT=process.env.PORT || 5000;
const connectDB=require('./config');
const userRoutes=require('./routes/userRoutes');

app.use(express.json());

connectDB();

app.use('/user',userRoutes);

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})