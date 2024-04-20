import { Router } from "express";
import { registerController,loginController } from "../controllers/auth";

const router=Router()
/**
 * http:localhost:3000/auth/login ---/register POST
 */

router.post("/login",loginController)
router.post("/register",registerController)


export {router}