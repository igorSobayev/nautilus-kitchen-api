import authJwt from '../middlewares/authJwt.js'
import allAccess from '../controllers/users/users.allAccess.controller.js'
import details from '../controllers/users/users.details.controller.js'
import adminBoard from '../controllers/users/users.details.controller.js'
import edit from '../controllers/users/users.edit.controller.js'

import express from 'express'
const router = express.Router()

router.get('/:id', [authJwt.verifyUserAndToken], details)

router.put('/edit/:id', [authJwt.verifyUserAndToken], edit)

router.get('/all', allAccess)

router.get('/admin', [authJwt.verifyToken, authJwt.isAdmin], adminBoard)

export default router
