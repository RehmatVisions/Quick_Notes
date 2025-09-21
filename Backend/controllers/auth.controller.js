import {User} from '../models/user.model.js'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
 
export const register=async(req,res)=>{ 
try {
    const {name,password,email}=req.body;
    if(!name||!password||!email){
     return res.status(400).json({
        message:"Fill all the fields",
        success:false
      })
    }
    const existUser=await User.findOne({email})
    if(existUser){
      return  res.status(400).json({
            message:"User Already Exist",
            success:false
        })
    }

    const hashedPassword=await bcrypt.hash(password,10)

    const newUser= new User({
        name,
        email,
        password:hashedPassword
    })

    await newUser.save();
  return  res.status(201).json({
        message:"User Created Successfully",
        success:true                    
    })
} catch (error) {
    console.log("Register Error")
   return res.status(500).json({
        message:"Internal Server Error",
        success:false
    })
}
}


export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "Fill all the fields",
        success: false
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        message: "User not found",
        success: false
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid Credentials",
        success: false
      });
    }

    // ✅ JWT Token generate
    const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    // ✅ Cookie set karna (yahan asli masla solve ho raha hai)
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,   // local pe false rakho, prod pe true
      sameSite: "lax"
    });

    return res.status(200).json({
      message: "Login Successful",
      success: true,
      token // optional (frontend me chahiye to use kar sakta hai)
    });

  } catch (error) {
    console.log("Login Error", error);
    return res.status(500).json({
      message: "Internal Server Error"
    });
  }
};


export const logout=async(req,res)=>{
    try {
        res.clearCookie("token"),{
            httpOnly:true,
            secure:false,
            sameSite:"strict"
        }
        return  res.status(200).json(
            {
                message:"Logout Successfully",
                success:true
            }
        )
    } catch (error) {
        console.log("Logout error",error)
        return res.status(500).json(
            {
                message:"Internal Server Error",
                success:false
            }
        )
    }
}