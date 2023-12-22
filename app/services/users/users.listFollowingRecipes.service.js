import VError from 'verror'

import ListFollowingService from '../followers/followers.listFollowing.service.js'

import UserModel from '../../repository/users/user.model.js'
import RecipeModel from '../../repository/recipes/recipe.model.js'

export default async function listFollowingRecipes ({ username }) {
    if (!username) {
        throw VError('Missing parameter username')
    }

    const user = await UserModel.findOne({ username })

    if (!user) {
        throw VError(`User with username ${username} not found`)
    }

    const following = await ListFollowingService({ username })

    if (!following.length) {
        return []
    }

    const followingIds = following.map(follower => follower._id)

    const recipes = await RecipeModel.find({ user: { $in: followingIds }, published: true, deleted: false })

    return recipes
}