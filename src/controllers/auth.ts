import { Request, Response } from "express"
import { registerNewUser,loginUser } from "../services/auth" 


const loginController =async({body}:Request,res:Response)=>{
  try {
    const {email,password}=body
    const responseUser=await loginUser({email,password})
    console.log(responseUser)
    res.send(responseUser)
  } catch (error) {
   console.log(error)
  }
  
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