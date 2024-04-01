import { Router } from "express";
import {readdirSync} from "fs"

const cleanFilename=(filename:String)=>{
    const file=filename.split(".").shift()
    return file
}
const PATH_ROUTER=`${__dirname}`
const router=Router()

readdirSync(PATH_ROUTER).filter((filename)=>{
    const cleanName=cleanFilename(filename)
    if(cleanName!=="index"){
        import(`./${cleanName}`).then((moduleRouter)=>{
           router.use(`/${cleanName}`,moduleRouter.router)
        })
        
    }
    
})
export {router}