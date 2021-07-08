const { truncateSync } = require("fs");
const crypto = require("crypto");
const User = require("../models/User");
const ErrorResponse = require("../utils/errorResponse");
const sendEmail = require("../utils/sendEmail");


exports.register=async (req,res,next)=>{
    const {first_name,last_name,email,password} = req.body;
    try{
        const user = await  User.create({
            first_name,
            last_name,
            email,
            password
        });
        sendToken(user, 201, res);

    }catch(error){
        next(error);
    }

};

exports.login= async (req,res,next)=>{
    const {email, password} = req.body;
    if(!email|| !password){
        return  next(new ErrorResponse("Please provide an email and a password",400));
        
    }
    try{
        const user = await User.findOne({email}).select("+password");
        if(!user){
            return  next(new ErrorResponse("Invalid crudentials",401));

        }
         
        const isMatch = await user.matchPasswords(password);
        if(!isMatch){
            return  next(new ErrorResponse("Invalid crudentials",401));
        }
        const {passord,...others}=user;

        sendToken(user, 200, res);
        }catch(error){
        res.status(500).json({
            success:false,
            error:error.message
        })
    }
    
};

exports.forgotpassword= async (req,res,next)=>{
    const {email} = req.body;
    try{
        const user = await User.findOne({email});
        console.log(user)
        if( !user){
            return next(new ErrorResponse("Email cout not be sent", 404))
        }
        const resetToken = user.getResetPasswordToken();
        console.log(resetToken)
        await user.save();

        // create the reset url
        const resetUrl = `http://localhost:3000/passwordreset/${resetToken}`;
        const message =`
        <h1>You have requested a password reset</h1>
        <p>Please click on this link to reset your password</p>
        <a href=${resetUrl} clicktracking=off >${resetUrl}</a>
        `


        try{
            console.log(user.email)

            await sendEmail({
                to: user.email,
                subject: "Password Reset Request",
                text:message,
                
            });
            res.status(200).json({
                succes: true,
                data: "Email sent"
            })
            
        }catch(error){
            user.resetToken= undefined;
            user.resetPasswordExpire = undefined;
            await user.save();

            return next(new ErrorResponse("Email could no be sent", 500))
        }
    }catch(error){
        next(error);
    }
};

exports.resetpassword= async (req,res,next)=>{
    const resetPasswordToken = crypto.createHash("sha256").update(req.params.resetToken).digest("hex");

    try{
        const user = await User.findOne({
            resetPasswordToken,
            resetPasswordExpire:{$gt: Date.now()}
        });
        if(!user){
            return next(new ErrorResponse("Invalide Reset Token", 400))
        }   

        user.password = req.body.password;
        
        user.resetPasswordToken = undefined;
        
        user.resetPasswordExpire = undefined;
        
        await user.save();

        res.status(201).json({
            success: true,
            data: "Password reset successfully",
        })
    }catch(error){
        next(error)
    }
};

const sendToken = (user, StatusCode, res)=>{
    const token = user.getSignedToken();

    res.status(StatusCode).json({
        succes: true,
        token: token,
        data: user

    })
}


