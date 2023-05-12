const usermodel=require("../models/query");
const bcrypt=require("bcrypt");
const db=require("../config/db")
 
 const sign = async(req,res)=>{
 let username= (req.body.username);
 let password= (req.body.password);
 let hashpassword= await bcrypt.hash(password,10)
 console.log(hashpassword);
 let x = await usermodel.create(username,hashpassword);
try{
    res.send("registered successfully")
}
catch(err){
    res.send("registration failed");
}
 }

const login=async (req,res)=>{
    var username=req.body.username;
    var password=req.body.password;
    check(username,password);
  
  function check (username,password){
    db.query('select password from password where username=?',[username],(err,results)=>{
        if(err){
            res.send("error occured");
        }
        else{
            if(results.length>0){
                const comparison= bcrypt.compare(password,results[0].password)
                if(comparison){
                    res.send("login successfully")
                }
                else{
                    res.send("email and password doesn't match")
                }
            }
            else{
                res.send("username doesn't exit")
            }
        }
    })
}
}



module.exports={
    sign,
    login
}

