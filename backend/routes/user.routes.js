import express from "express"
import { getCurrentUser } from "../controllers/user.controller.js"
import isAuth from "../middlewares/isAuth.js"
import { generatedemo } from "../controllers/website.controller.js"
const userRouter=express.Router()


authRouter.get("/me",isAuth, getCurrentUsert)
authRouter.get("/gen",generatedemo)
export default authRouter