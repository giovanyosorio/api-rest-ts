import "dotenv/config"
import express from "express"
import cors from "cors"
import {router} from "./src/routes"
import db from "./src/config/mongo"
const PORT=process.env.PORT || 3000
const app=express()
app.use(router)
app.use(express.json())
app.use(cors())
db().then(()=>console.log("Connecting to the database"))


app.listen(PORT,()=>{
    console.log(`listening on PORT ${PORT}`)
})
