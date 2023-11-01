import authJwt from '../middlewares/authJwt.js'
import createClean from '../controllers/recipes/recipes.createClean.controller.js'
import details from '../controllers/recipes/recipes.details.controller.js'
import list from '../controllers/recipes/recipes.list.controller.js'
import editRecipe from '../controllers/recipes/recipes.edit.controller.js'
import publishRecipe from '../controllers/recipes/recipes.publish.controller.js'
import deleteRecipe from '../controllers/recipes/recipes.delete.controller.js'

import express from 'express'
const router = express.Router()

router.get('/', [authJwt.verifyToken], list)
router.get('/:id', [authJwt.verifyToken], details)
router.post('/create-clean', [authJwt.verifyUserAndToken], createClean)
router.put('/edit/:id', [authJwt.verifyUserAndToken], editRecipe)
router.put('/publish/:id', [authJwt.verifyUserAndToken], publishRecipe)
router.put('/delete/:id', [authJwt.verifyUserAndToken], deleteRecipe)



export default router
