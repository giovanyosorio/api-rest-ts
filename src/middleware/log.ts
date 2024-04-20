import { NextFunction, Request, Response } from "express";

const logMiddleware=(req:Request,res:Response,next:NextFunction)=>{
    const header=req.headers;
    const user_agent=header["user-agent"]
    console.log("user-agent",user_agent)
    next()
}

export  {logMiddleware};