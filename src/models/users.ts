import { Schema, Types, model, Model } from "mongoose";
import { User } from "../interfaces/user.interface";
import bcrypt from "bcryptjs"

const UserSchema=new Schema<User>({

    email:{type:String,required:true,unique:true},
    name:{type:String,required:true},
    password:{type:String,required:true},
    description:{type:String,default:"hola"},
    
},{versionKey:false,timestamps:true})

const UserModel=model("users",UserSchema)

export default UserModel