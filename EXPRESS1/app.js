//importing
const express=require('express');
const morgan=require('morgan');
require('dotenv').config();

//initialization

const app=new express();
app.use(morgan('dev'));

//middleware
//accessing the port
const PORT=process.env.PORT;
//DB Creation


//API


//Listening the port
app.listen(3000,(req,res)=>{
    console.log(`server runs`);
})