import {hash,compare} from "bcryptjs"
import { NextFunction } from "express"

const encrypt=async(pass:string)=>{
    const passwordhash=await hash(pass,8)
    return passwordhash

}

const verified=async (pass:string,passhas:string)=>{

    const isCorrect=compare(pass,passhas)
    return isCorrect
}

export {encrypt,verified}