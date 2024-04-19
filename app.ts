import "dotenv/config"
import express from "express"
import cors from "cors"
import {router} from "./src/routes"
import db from "./src/config/mongo"
const PORT=process.env.PORT || 3000
const app=express()
app.use(express.json())
app.use(router)

app.use(cors())
db().then(()=>console.log("connecting to database"))


app.listen(PORT,()=>{
    console.log(`listening on PORT ${PORT}`)
})