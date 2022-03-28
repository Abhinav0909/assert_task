const express = require('express');
const app = express();
const port = 5000;
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
dotenv.config();
const mongoose = require('mongoose');
const Router = require('./routes/routes')
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(morgan("dev"));

mongoose.connect(
    process.env.MONGODB_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    },
    (err)=>{
        if(err)console.log("Couldn't connect to db");
        else console.log("Db connected successfully");
    }
)
app.use(Router);

app.listen(port,()=>{console.log(`Server is listening on ${port}`)})