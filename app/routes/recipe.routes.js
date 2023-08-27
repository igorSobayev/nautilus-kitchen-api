import authJwt from '../middlewares/authJwt.js'
import create from '../controllers/recipes/recipes.create.controller.js'
import list from '../controllers/recipes/recipes.list.controller.js'

import express from 'express'
const router = express.Router()

router.get('/', [authJwt.verifyToken], list)
// router.get('/',  list)
router.post('/create', [authJwt.verifyToken], create)


export default router
