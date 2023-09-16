import authJwt from '../middlewares/authJwt.js'
import createClean from '../controllers/recipes/recipes.createClean.controller.js'
import details from '../controllers/recipes/recipes.details.controller.js'
import list from '../controllers/recipes/recipes.list.controller.js'

import express from 'express'
const router = express.Router()

router.get('/', [authJwt.verifyToken], list)
router.get('/:id', [authJwt.verifyToken], details)
router.post('/create-clean', [authJwt.verifyUserAndToken], createClean)
// router.put('/edit/:id', [authJwt.verifyUserAndToken], editRecipe)



export default router
