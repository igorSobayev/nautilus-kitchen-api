import authJwt from '../middlewares/authJwt.js'
import create from '../controllers/recipes/recipes.create.controller.js'

import express from 'express'
const router = express.Router()

router.post('/create', [authJwt.verifyToken], create)

export default router
