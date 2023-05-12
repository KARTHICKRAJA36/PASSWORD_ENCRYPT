const express=require ("express");
const db=require("./config/db");
const app=express();
app.use(express.urlencoded({extended:false}));
const bodyparser=require("body-parser");
app.use(bodyparser.json());
const rout=require("./routes/router");
app.use(rout);



app.listen(3000,()=>{
    console.log("server listening at 3000...");
})
