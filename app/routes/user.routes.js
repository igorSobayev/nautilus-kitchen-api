import authJwt from '../middlewares/authJwt.js'
import allAccess from '../controllers/users/users.allAccess.controller.js'
import details from '../controllers/users/users.details.controller.js'
import publicDetails from '../controllers/users/users.publicDetails.controller.js'
import adminBoard from '../controllers/users/users.details.controller.js'
import edit from '../controllers/users/users.edit.controller.js'
import uploadFile from '../controllers/users/users.uploadFile.controller.js'
import uploadMultipleFiles from '../controllers/users/users.uploadMultipleFiles.controller.js'
import deleteFiles from '../controllers/users/users.deleteFiles.controller.js'
import allRecipes from '../controllers/users/users.allRecipes.controller.js'
import wipRecipes from '../controllers/users/users.wipRecipes.controller.js'
import publishedRecipes from '../controllers/users/users.publishedRecipes.controller.js'
import publicRecipes from '../controllers/users/users.publicRecipes.controller.js'

import followUser from '../controllers/followers/followers.followUser.controller.js'
import unfollowUser from '../controllers/followers/followers.unfollowUser.controller.js'
import listFollowing from '../controllers/followers/followers.listFollowing.controller.js'
import listFollowers from '../controllers/followers/followers.listFollowers.controller.js'

import listFollowingRecipes from '../controllers/users/users.listFollowingRecipes.controller.js'

import express from 'express'
import multer from 'multer'

const router = express.Router()

const uploader = multer({ dest: '/tmp' })

router.get('/:id', [authJwt.verifyUserAndToken], details)

router.put('/edit/:id', [authJwt.verifyUserAndToken], edit)
router.post('/upload-file/:id', [authJwt.verifyUserAndToken], uploader.single('file'), uploadFile)
router.post('/upload-multiple-files/:id', [authJwt.verifyUserAndToken], uploader.array('file[]'), uploadMultipleFiles)
router.post('/delete-files/:id', [authJwt.verifyUserAndToken], deleteFiles)

// User recipes routes
router.get('/published-recipes/:id', [authJwt.verifyUserAndToken], publishedRecipes)
router.get('/all-recipes/:id', [authJwt.verifyUserAndToken], allRecipes)
router.get('/wip-recipes/:id', [authJwt.verifyUserAndToken], wipRecipes)

router.put('/:username/list-following-recipes', [authJwt.verifyUserAndToken], listFollowingRecipes) // Is PUT temporally

// User followers routes
router.put('/follow/:username', [authJwt.verifyUserAndToken],  followUser)
router.put('/unfollow/:username', [authJwt.verifyUserAndToken],  unfollowUser)
router.get('/following/:username', listFollowing)
router.get('/followers/:username', listFollowers)

// Public endpoints
router.put('/public/:username', publicDetails)
router.get('/public-recipes/:username', publicRecipes)

router.get('/all', allAccess)

router.get('/admin', [authJwt.verifyToken, authJwt.isAdmin], adminBoard)

export default router
