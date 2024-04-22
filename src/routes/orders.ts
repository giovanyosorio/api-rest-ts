import { Router } from "express";
import { getORders } from "../controllers/orders";
import { checkJWT } from "../middleware/session";
/**
 * solo puede acceder las personas que tienen una sesion activa
 * que tengan un jwt valido
 */

const router=Router()



router.get("/",checkJWT,getORders)
export  {router}