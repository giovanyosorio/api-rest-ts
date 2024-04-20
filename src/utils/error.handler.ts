import { Response } from "express";

export const handlehttp=(res:Response  ,error:string,errorRaw?:any)=>{
    console.log(errorRaw)
res.status(500)
res.send({error})
}

