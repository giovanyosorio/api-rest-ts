import { Request, Response } from "express"
import { registerNewUser,loginUser } from "../services/auth" 


const loginController =async({body}:Request,res:Response)=>{

}


const registerController=async({body}:Request,res:Response)=>{
  try {
    const responseUser=await registerNewUser(body)
    console.log(responseUser)
    res.send(responseUser)
  } catch (error) {
   console.log(error)
  }

}

export {loginController,registerController}