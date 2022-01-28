import express from 'express';

import usersRoutes from './routes/users.js';

import bodyParser from 'body-parser';




const app=express();

const PORT=5000;

app.use(bodyParser.json());



app.get('/',(req,res)=>{
  console.log("Req Send")
  res.send("Hello Express");
});


app.use('/users',usersRoutes);


app.listen(PORT,()=>console.log(`Connected on Port: http://localhost:${PORT}`));



