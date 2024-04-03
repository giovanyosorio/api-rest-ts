import "dotenv/config"
import express from "express"
import cors from "cors"
import {router} from "./src/routes"

const PORT=process.env.PORT || 3000
const app=express()
app.use(router)
app.use(express.json())
app.use(cors())

app.listen(PORT,()=>{
    console.log(`listening on PORT ${PORT}`)
})