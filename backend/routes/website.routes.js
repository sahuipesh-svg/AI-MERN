import express from 'express'
import { deploy, generateWebsite, getAll, getBySlug, getWebsiteById,changes } from '../controllers/website.controller.js'
import isAuth from "../middlewares/isAuth.js"

const websiteRouter=express.Router()

websiteRouter.post("/generate",isAuth,generateWebsite)
websiteRouter.get("/get-by-id/:id",isAuth,getWebsiteById)
websiteRouter.get("/get-all",isAuth,getAll)
websiteRouter.post("/update/:id",isAuth,changes)
websiteRouter.get("/deploy/:id",isAuth,deploy)

websiteRouter.get("/get-by-slug/:slug",isAuth,getBySlug)
export default websiteRouter