const db=require("../config/db");
const controls=require("../controllers/controls");
const bcrypt=require("bcrypt");
class usermodel{
static async create(username,hashpassword){
    
    let create=await db.query("insert into password values (?,?)",[username,hashpassword],(err,result)=>{
        if(!err){
            return true;
        }
        else{
            return false;
        }
    })  
}

 

}
module.exports=usermodel;