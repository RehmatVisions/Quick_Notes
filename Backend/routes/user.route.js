import express from "express";
import isAuthenticated from "../Middleware/isAuthenticated.js";
const router=express.Router();

router.get("/profile",isAuthenticated,(req,res)=>{
    res.json({
        message:"welcome to profile",
        success:true
    })
})
export default router;