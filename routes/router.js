const express=require("express");

const {sign,login}=require("../controllers/controls");

const router=require("express").Router();



router.post('/sign',sign);
router.post('/login',login);


module.exports=router;