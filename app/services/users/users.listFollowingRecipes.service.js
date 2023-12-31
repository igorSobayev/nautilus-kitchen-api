import VError from 'verror'

import ListFollowingService from '../followers/followers.listFollowing.service.js'

import UserModel from '../../repository/users/user.model.js'
import RecipeModel from '../../repository/recipes/recipe.model.js'

import config from '../../config/shared.js'

export default async function listFollowingRecipes ({ userId }) {
    if (!userId) {
        throw VError('Missing parameter userId')
    }

    const user = await UserModel.findById(userId)

    if (!user) {
        throw VError(`User with ID ${userId} not found`)
    }

    const following = await ListFollowingService({ username: user.username })

    if (!following.length) {
        return []
    }

    const followingIds = following.map(follower => follower._id)

    const recipes = await RecipeModel.find({ user: { $in: followingIds }, published: true, deleted: false }).populate('user', config.EXCLUDED_USER_FIELDS)

    return recipes
}