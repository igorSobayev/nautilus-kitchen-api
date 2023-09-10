import authJwt from '../middlewares/authJwt.js'
import allAccess from '../controllers/users/users.allAccess.controller.js'
import details from '../controllers/users/users.details.controller.js'
import adminBoard from '../controllers/users/users.details.controller.js'
import edit from '../controllers/users/users.edit.controller.js'
import uploadFile from '../controllers/users/users.uploadFile.controller.js'

import express from 'express'
import multer from 'multer'

const router = express.Router()

const uploader = multer({ dest: '/tmp' })

router.get('/:id', [authJwt.verifyUserAndToken], details)

router.put('/edit/:id', [authJwt.verifyUserAndToken], edit)
router.post('/upload-file/:id', [authJwt.verifyUserAndToken], uploader.single('file'), uploadFile)

router.get('/all', allAccess)

router.get('/admin', [authJwt.verifyToken, authJwt.isAdmin], adminBoard)

export default router
